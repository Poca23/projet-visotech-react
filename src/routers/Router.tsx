import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import LayoutWithBar from "../layout/LayoutWithBar";
import Dashboard from "../pages/B_body/Dashboard";
import Error from "../pages/B_body/Error";
import Favorite from "../pages/B_body/Favorite";
import Login from "../pages/B_body/Login";
import MovieDetails from "../pages/B_body/MovieDetails";
import PeopleDetails from "../pages/B_body/PeopleDetails";
import Research from "../pages/B_body/Research";
import SeenMovie from "../pages/B_body/SeenMovie";
import Setting from "../pages/B_body/Setting";


const Router: FC<{}> = ({}) => {
    return (


        <Routes>
            <Route path="/" element={<LayoutWithBar/>}>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Error" element={<Error/>}/>
                <Route path="/Favorite" element={<Favorite/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/MovieDetails" element={<MovieDetails/>}/>
                <Route path="/PeopleDetails" element={<PeopleDetails/>}/>
                <Route path="/Research" element={<Research/>}/>
                <Route path="/SeenMovie" element={<SeenMovie/>}/>
                <Route path="/Setting" element={<Setting/>}/>
            </Route>
        </Routes>

    );
};

export default Router;
