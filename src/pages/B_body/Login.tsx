import React, {FC} from 'react';
import Pages from "../../components/layout/Pages";
import movieData from "../../dataFake/movie_collection.json";

const Login: FC<{}> = ({}) => {
    const movieCollection = movieData.results
    return (
        <Pages title='Login'>
            <h1>Coucou, je suis dans le Login</h1>
        </Pages>
    );
};

export default Login;
