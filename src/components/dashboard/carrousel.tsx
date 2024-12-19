import React, {FC} from 'react';
import {Grid2} from "@mui/material";
import MovieItem from "../MovieItem";
import {MovieItem as MovieType} from "../../@types/movieItem";

const Carrousel: FC<{ list:MovieType[] }> = ({list}) => {
    return (
        <div>
            < Grid2 container spacing={1}>
                {list.map((item) => (
                    <Grid2 size={{xs: 12, md: 3}}>
                        <MovieItem movie={item}/>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default Carrousel;
