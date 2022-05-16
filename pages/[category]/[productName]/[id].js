import Carousel from 'react-material-ui-carousel'

import {
    Grid,
    Box,
    Typography,
    Chip,
    Container,
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@mui/material'

import TemplateDefault from '../../../src/templates/default/Default'
import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import { formatCurrency } from '../../../src/utils/currency'

import styles from './product.module.css'

const Product = ({ product }) => {
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={styles.box}>
                            <Carousel
                                autoPlay={true}
                                animation={'slide'}
                                navButtonsAlwaysVisible={true}
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            >
                                {
                                    product.files.map((file) => {
                                        return (
                                            <Card key={file.name} className={styles.card}>
                                                <CardMedia
                                                    className={styles.cardMedia}
                                                    image={`/uploads/${file.name}`}
                                                    title={product.title}
                                                />
                                            </Card>
                                        )
                                    })
                                }
                            </Carousel>
                        </Box>
                        <Box className={styles.box}>
                            <Typography component={'span'} variant={'caption'}>
                                Publicado 22 abril 2022 -- TO DO
                            </Typography>
                            <Typography component={'h4'} variant={'h4'} className={styles.productName}>
                                { product.title }
                            </Typography>
                            <Typography component={'h4'} variant={'h4'} className={styles.price}>
                                { formatCurrency(product.price) }
                            </Typography>
                            <Chip label={product.category}/>
                        </Box>
                        <Box className={styles.box}>
                            <Typography component={'h6'} variant={'h6'}>
                                Descrição
                            </Typography>
                            <Typography component={'p'} variant={'body2'}>
                                { product.description }
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={styles.box} elevation={0}>
                            <CardHeader
                                avatar={
                                <Avatar src={product.user.image}>
                                    { product.user.image || product.user.name[0] }
                                </Avatar>}
                                title={product.user.name}
                                subheader={product.user.email}
                            />
                            <CardMedia
                                image={product.user.image}
                                title={product.user.name}
                            />
                        </Card>

                        <Box className={styles.box}>
                            <Typography component={'h6'} variant={'h6'}>
                                Localização
                            </Typography>
                            <Typography component={'p'} variant={'body2'}>
                                Rua Nelson Correia Leite - Sorocaba/SP
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query

    await dbConnect()

    const product = await ProductsModel.findOne({ _id: id })

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}

export default Product