import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const Research: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Research'>
            <h1>Coucou, je suis dans le Research</h1>
        </Pages>
    );
};

export default Research;
