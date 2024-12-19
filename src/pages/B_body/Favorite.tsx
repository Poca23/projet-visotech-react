import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const Favorite: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Favorite'>
            <h1>Coucou, je suis dans le favoris</h1>
        </Pages>
    );
};

export default Favorite;

