import Link from 'next/link';
import Head from "next/head";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import TemplateDefault from '../src/templates/default/Default'

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
					<Container maxWidth="lg" className={styles.searchContainer}>
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
							<Link href='#'>
								<Grid item xs={12} sm={6} md={4}>
									<Card className={styles.card}>
										<CardMedia
										className={styles.cardMedia}
										image={'https://source.unsplash.com/random'}
										title="Titulo da imagem"
										/>
										<CardContent>
										<Typography variant="h5" component="h2">
											Produto x
										</Typography>
										<Typography variant="h5" component="h2">
											R$ 60,00
										</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Link>

							<Link href='#'>
								<Grid item xs={12} sm={6} md={4}>
									<Card className={styles.card}>
										<CardMedia
										className={styles.cardMedia}
										image={'https://source.unsplash.com/random'}
										title="Titulo da imagem"
										/>
										<CardContent>
										<Typography variant="h5" component="h2">
											Produto x
										</Typography>
										<Typography variant="h5" component="h2">
											R$ 60,00
										</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Link>

							<Link href='#'>
								<Grid item xs={12} sm={6} md={4}>
									<Card className={styles.card}>
										<CardMedia
										className={styles.cardMedia}
										image={'https://source.unsplash.com/random'}
										title="Titulo da imagem"
										/>
										<CardContent>
										<Typography variant="h5" component="h2">
											Produto x
										</Typography>
										<Typography variant="h5" component="h2">
											R$ 60,00
										</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Link>
						</Grid>
					</Container>
				</TemplateDefault>
			</main>
		</>
	);
}
