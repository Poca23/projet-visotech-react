import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";


const Error: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Error'>
            <h1>Coucou, je suis dans le error</h1>
        </Pages>
    );
};

export default Error;
