import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {MovieItem as MovieType} from "../@types/movieItem";
import {FC} from "react";

const styles = {
    CardContent: {
        display: 'flex',
        margin: 'auto',
        textAlign: 'center',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 320,
        maxHeight: 500,
        borderRadius: '1px solid',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        "&:hover": {
            boxShadow: 'none',
        }
    },
    cardActionArea: {
        padding: '5px 10px',
    },
    cardMedia: {
        filter: 'brightness(50%)',
        "&:hover": {
            filter: 'brightness(100%)',
        }
    },
    cardContent: {},
    typography: {
        color: 'text.secondary'
    },
    typographyOverview: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical', // Remplace -webkit-box-orient avec camelCase
        WebkitLineClamp: 3,         // Remplace -webkit-line-clamp avec camelCase
        overflow: 'hidden',
    },
}


const MovieItem:FC<{movie:MovieType}> =({movie}) => {
    return (
        <CardContent sx={styles.CardContent}>
            <Card sx={styles.card}>
                <CardActionArea sx={styles.cardActionArea}>
                    <CardMedia sx={styles.cardMedia}
                               component="img"
                               object-fit={'cover'}
                               image={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                               alt={movie.title}
                    />
                    <CardContent sx={styles.cardContent}>
                        <Typography gutterBottom variant="h6" component="div" sx={styles.typography}>
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" sx={[styles.typography, styles.typographyOverview]}>
                            {movie.overview}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardContent>
    );
}

export default MovieItem;

