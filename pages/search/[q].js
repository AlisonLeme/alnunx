import Link from 'next/link';
import slugify from 'slugify';

import {
    Container,
    Typography,
    Box,
    Grid,
    IconButton,
    Paper,
    InputBase
} from '@mui/material'

import TemplateDefault from '../../src/templates/default/Default'
import Card from '../../src/components/card/Card'
import dbConnect from '../../src/utils/dbConnect';
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency';
import SerachInput from '../../src/components/SearchInput/SearchInput';

import SearchIcon from '@mui/icons-material/Search';

import styles from './listProduct.module.css'

const List = ({ products, q }) => {
    const termo = q.toUpperCase()

    return (
        <TemplateDefault>
            <Container maxWidth={'lg'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <SerachInput />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box className={styles.box}>
                            <Typography component={'h6'} variant='h6'>
                                Anúncios
                            </Typography>
                            <Typography component={'span'} variant='suntitle2'>
                                ENCONTRADOS {products.length} ANÚNCIOS PARA O TERMO <strong>{termo}</strong>
                            </Typography>

                            <Grid container spacing={4}  className={styles.gridCards}>
                                {
                                    products.map((product) => {
                                        const category = slugify(product.category).toLowerCase()
                                        const title = slugify(product.title).toLowerCase()
    
                                        return (
                                            <Link key={product._id} href={`${category}/${title}/${product._id}`} passHref>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Card
                                                        image={`/uploads/${product.files[0].name}`}
                                                        title={product.title}
                                                        subtitle={formatCurrency(product.price)}
                                                    />
                                                </Grid>
                                            </Link>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {
    const { q } = query

    await dbConnect()

    const products = await ProductsModel.find({
		$or: [
            { 
                title: { 
                    $regex: q,
                    $options: 'i'
                } 
            },
            { 
                description: { 
                    $regex: q,
                    $options: 'i'
                } 
            }
        ]
	})

    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            q
        }
    }
}

export default List