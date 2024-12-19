import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const Setting: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title={'Setting'}>
            <h1>Coucou, je suis dans le Setting</h1>
        </Pages>
    );
};
export default Setting;
