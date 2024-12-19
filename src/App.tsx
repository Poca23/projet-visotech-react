import React from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import Router from "./routers/Router";
import {renderToString} from 'react-dom/server';
import {Helmet, HelmetProvider} from 'react-helmet-async';


function App() {

    return (
        <HelmetProvider>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
        </HelmetProvider>
    )
        ;

}

export default App
