import Link from 'next/link';
import Head from "next/head";

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

import styles from "../styles/Home.module.css";

export default function Home() {
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
							<Link href='#' passHref>
								<Grid item xs={12} sm={6} md={4}>
									<Card
										image={'https://source.unsplash.com/random'}
										title='Produto X'
										subtitle='R$ 90,00'
									/>
								</Grid>
							</Link>

							<Link href='#' passHref>
								<Grid item xs={12} sm={6} md={4}>
									<Card
										image={'https://source.unsplash.com/random'}
										title='Produto X'
										subtitle='R$ 90,00'
									/>
								</Grid>
							</Link>
							
							<Link href='#' passHref>
								<Grid item xs={12} sm={6} md={4}>
									<Card
										image={'https://source.unsplash.com/random'}
										title='Produto X'
										subtitle='R$ 90,00'
									/>
								</Grid>
							</Link>
						</Grid>
					</Container>
				</TemplateDefault>
			</main>
		</>
	);
}
