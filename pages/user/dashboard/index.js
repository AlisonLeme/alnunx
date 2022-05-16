import { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';

import {
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';

import { getSession } from 'next-auth/react';

import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import TemplateDefault from '../../../src/templates/default/Default'
import Card from '../../../src/components/card/Card'
import { formatCurrency } from '../../../src/utils/currency'
import ModalConfirm from '../../../src/components/modalConfirm/ModalConfirm'
import useToasty from '../../../src/contexts/Toasty'

import styles from './dashboard.module.css'

const Dashboard = ({ products }) => {

    const { setToasty } = useToasty()

    const [openModal, setOpenModal] = useState(false)
    const [productId, setProductId] = useState()
    const [removeProducts, setRemoveProducts] = useState([])

    const handleClickRemove = (productId) => {
        setProductId(productId)
        setOpenModal(true)
    }
    
    const handleClose = () => {
        setOpenModal(false)
    }

    const handleConfirmRemove = () => {
        axios.delete('/api/products/delete', {
            data: {
                id: productId
            }
        })
            .then(handleSuccess)
            .catch(handleError)
    }

    const handleSuccess = () => {
        handleClose()
        setRemoveProducts([ ...removeProducts, productId ])
        setToasty({
            open: true,
            severity: 'success',
            text: 'Anúncio removido com sucesso!'
        })
    }

    const handleError = () => {
        handleClose()
        setToasty({
            open: true,
            severity: 'error',
            text: 'Ops, ocorreu um erro!'
        })
    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={styles.container}>
                <Typography component="h1" variant='h2' align='center'>
                    Meus Anúncios
                </Typography>
                <Link href={'/user/publish'} passHref>
                    <Button variant='contained' color='primary' className={styles.btn}>
                        Publicar novo anúncio
                    </Button>
                </Link>
            </Container>
            <Container maxWidth='lg'>
                {
                    products.length === 0 &&
                        <Typography component='div' variant='body1' align='center' color='textPrimary' gutterBottom>
                            Nenhum anúncio publicado
                        </Typography>
                }
                <Grid container spacing={4}>
                    {
                        products.map((product) => {
                            if (removeProducts.includes(product._id)) {
                                return null
                            }
                            return (
                                <Link key={product._id} href='#' passHref>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card
                                            url={''}
                                            image={`/uploads/${product.files[0].name}`}
                                            title={product.title}
                                            subtitle={formatCurrency(product.price)}
                                            actions={
                                                <>
                                                    <Button size='small' color='primary'>
                                                        Editar
                                                    </Button>
                                                    <Button size='small' color='primary' onClick={() => handleClickRemove(product._id)}>
                                                        Remover
                                                    </Button>
                                                </>
                                            }
                                        />
                                    </Grid>
                                </Link>
                            )
                        })
                    }
                </Grid>
                <ModalConfirm
                    title='Deseja realmente remover este anúncio ?'
                    content='Ao confirmar a operação não será possivel voltar atrás'
                    handleConfirm={handleConfirmRemove}
                    open={openModal}
                    handleClose={handleClose}
                />
            </Container>
      </TemplateDefault>
    )
}

Dashboard.requireAuth = true

// se beneficiando do next para fazer o carregamento do lado do servidor e trazer como props para o front

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })
    await dbConnect()

    const products = await ProductsModel.find({ 'user.id': session.userId })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default Dashboard