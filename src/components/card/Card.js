import {
    Card as CardMUI,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material'

import styles from './card.module.css'

const Card = ({ image, title, subtitle, actions }) => {
    return (
        <CardMUI className={styles.card}>
            <CardMedia
                className={styles.cardMedia}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {title}
                </Typography>
                <Typography variant='h5' component='h2'>
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ? (
                        <CardActions>
                        {actions}
                        </CardActions>
                    )
                    : null
            }
        </CardMUI>
    )
}

export default Card