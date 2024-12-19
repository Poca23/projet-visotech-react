import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const PeopleDetails: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='PeopleDetails'>
            <h1>Coucou, je suis dans le PeopleDetails</h1>
        </Pages>
    );
};

export default PeopleDetails;
