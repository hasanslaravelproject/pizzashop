import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

//import Header from '../Includes/Header';
//import Footer from '../Includes/Footer';
import Slider from "./Includes/Slider";
// import { useLocation } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    
    // let location = useLocation();
    
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - React Boilerplate" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } />
        </Helmet>
        <Header/>
        {/* <Slider /> */}
        {/* {
            location.pathname == '/' ? <Slider /> : ''
        } */}
            {children}
        <Footer/>
        </>
     );
}
 
export default Layout;