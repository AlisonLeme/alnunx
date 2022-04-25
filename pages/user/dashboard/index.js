import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from '@mui/material';

import TemplateDefault from '../../../src/templates/default/Default';

import styles from './dashboard.module.css'

const dashboard = () => {
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
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://source.unsplash.com/random'
                                title="Titúlo imagem"
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    R$ 50,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://source.unsplash.com/random'
                                title="Titúlo imagem"
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    R$ 50,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://source.unsplash.com/random'
                                title="Titúlo imagem"
                            />
                            <CardContent>
                                <Typography variant='h5' component='h2'>
                                    Produto X
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    R$ 50,00
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Editar
                                </Button>
                                <Button size='small' color='primary'>
                                    Remover
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
      </TemplateDefault>
    )
}

export default dashboard