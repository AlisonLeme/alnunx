import Head from "next/head";
import Link from 'next/link';
import slugify from "slugify";

import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import TemplateDefault from '../src/templates/default/Default'
import Card from '../src/components/card/Card';
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

import styles from "../styles/Home.module.css";

export default function Home({ products }) {
	return (
		<>
			<Head>
				<title>Alnunx</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<TemplateDefault>
					<Container maxWidth="md" className={styles.searchContainer}>
						<Typography component="h1" variant='h3' align='center'>
							O que deseja encontrar?
						</Typography>
						<Paper className={styles.searchPaper}>
							<InputBase
								placeholder='ex: iPhone 12 com garantia'
								fullWidth
							/>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</Paper>
					</Container>

					<Container maxWidth='lg' className={styles.cardGrid}>
						<Typography component='h2' variant='h4' align='center' gutterBottom>
							Destaques
						</Typography>
						<Grid container spacing={4} className={styles.grid}>
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
					</Container>
				</TemplateDefault>
			</main>
		</>
	);
}

export async function getServerSideProps() {
    await dbConnect()

    const products = await ProductsModel.aggregate([{
		$sample: { size: 9 }
	}])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}
