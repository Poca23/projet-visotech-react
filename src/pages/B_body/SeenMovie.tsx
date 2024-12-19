import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const SeenMovie: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title={'SeenMovie'}>
            <h1>Coucou, je suis dans le SeenMovie</h1>
        </Pages>
    );
};
export default SeenMovie;
