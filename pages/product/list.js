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

import SearchIcon from '@mui/icons-material/Search';

import styles from './listProduct.module.css'

const List = () => {
    return (
        <TemplateDefault>
            <Container maxWidth={'lg'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper component={'form'} className={styles.searchBox}>
                            <InputBase 
                                placeholder='Ex..: Playstation 5'
                                fullWidth
                            />
                            <IconButton type='submit' arial-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Box className={styles.box}>
                            <Typography component={'h6'} variant='h6'>
                                Anúncios
                            </Typography>
                            <Typography component={'span'} variant='suntitle2'>
                                ENCONTRADOS 200 ANÚNCIOS
                            </Typography>

                            <Grid container spacing={4}  className={styles.gridCards}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card 
                                        image={'https://source.unsplash.com/random'}
                                        title='Produto X'
                                        subtitle='R$ 90,00'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card 
                                        image={'https://source.unsplash.com/random'}
                                        title='Produto X'
                                        subtitle='R$ 90,00'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card 
                                        image={'https://source.unsplash.com/random'}
                                        title='Produto X'
                                        subtitle='R$ 90,00'
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default List