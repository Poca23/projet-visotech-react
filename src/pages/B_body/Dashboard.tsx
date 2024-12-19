import React, {FC} from 'react';
import {Grid2} from "@mui/material";
import MovieItem from "../../components/MovieItem";
import movieData from "../../dataFake/movie_collection.json";
import Pages from "../../components/layout/Pages";
import Carrousel from '../../components/dashboard/carrousel';
import carrouselMoviePopulary from '../../dataFake/movie_popular.json'
import carrouselMovieTopRated from '../../dataFake/movie_top_rated.json'


const Dashboard: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Dashboard'>
            <h2>Films populaires du moment</h2>
            < Carrousel list={carrouselMoviePopulary.results}/>
            <h2>Films à l'affiche</h2>
            < Carrousel list={carrouselMovieTopRated.results}/>
        </Pages>
    );
};

export default Dashboard;
