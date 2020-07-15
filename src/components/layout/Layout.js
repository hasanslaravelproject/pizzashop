import React, { Fragment } from "react";
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import Slider from "../Includes/Slider";
import { useLocation } from 'react-router-dom'


const Layout = (props) => {

    let location = useLocation();
    console.log(">> Lcoation namen << ", location.pathname);

    
  return (
    <Fragment>
      <Header />
      {
        location.pathname == '/' ? <Slider /> : ''
      }
      {/* Nav Bar */}
      {props.children}
      {/* Media */}
      <Footer />
    </Fragment>
  );
};

export default Layout;


// Containers
// page
// Components


// components
    // layout
    // containers
    // include
    // general 
    // helpers
// pages