import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const MovieDetails: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Movie Details'>
            <h1>Coucou, je suis dans le MovieDetails</h1>
        </Pages>
    );
};

export default MovieDetails;
