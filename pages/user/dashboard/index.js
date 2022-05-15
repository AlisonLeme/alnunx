import Link from 'next/link';

import {
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';

import { getSession } from 'next-auth/react';

import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import TemplateDefault from '../../../src/templates/default/Default';
import Card from '../../../src/components/card/Card';
import { formatCurrency } from '../../../src/utils/currency';

import styles from './dashboard.module.css'

const Dashboard = ({ products }) => {

    return (
        <TemplateDefault>
            <Container maxWidth="sm">
                <Typography component="h1" variant='h2' align='center'>
                    Meus Anúncios
                </Typography>
                <Button variant='contained' color='primary' className={styles.btn}>
                    Publicar novo anúncio
                </Button>
            </Container>
            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                    {
                        products.map((product) => {
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
                                                    <Button size='small' color='primary'>
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