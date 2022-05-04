import Link from 'next/link';

import {
    Button,
    Container,
    Grid,
    Typography,
  } from '@mui/material';

import TemplateDefault from '../../../src/templates/default/Default';

import Card from '../../../src/components/card/Card';

import styles from './dashboard.module.css'

const Dashboard = () => {
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
                    <Link href='#' passHref>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                url={''}
                                image={'https://source.unsplash.com/random'}
                                title='Produto X'
                                subtitle='R$ 90,00'
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

                    <Link href='#' passHref>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                url={''}
                                image={'https://source.unsplash.com/random'}
                                title='Produto X'
                                subtitle='R$ 90,00'
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
                    
                    <Link href='#' passHref>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                url={''}
                                image={'https://source.unsplash.com/random'}
                                title='Produto X'
                                subtitle='R$ 90,00'
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
                </Grid>
            </Container>
      </TemplateDefault>
    )
}

Dashboard.requireAuth = true

export default Dashboard