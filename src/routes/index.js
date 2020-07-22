import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../pages/Home/Home";
import Category from "../pages/Category/Categories";
import Single from "../pages/Home/Single";
import Product from "../pages/Product/Products";
import AddProduct from "../pages/Product/AddProduct";
import EditProduct from "../pages/Product/EditProduct";
import ViewProduct from "../pages/Product/ViewProduct";
import Cart from "../pages/Cart";

import AddCategory from "../pages/Category/AddCategory";
import ViewCategory from "../pages/Category/ViewCategory";

// import Store from '../pages/store';
// import About from '../pages/About';
// import NotFound from '../pages/NotFound';
// import Cart from "../pages/cart";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={Cart} /> 
      <Route path={`/single-product/:id`}  render={props => <Single {...props} />}  /> 
      <Route
        path="/product"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`}   render={props => <Product {...props} />} exact />
            <Route path={`${url}/create`}  render={props => <AddProduct {...props} />}  />
            <Route path={`${url}/view/:id`}  render={props => <ViewProduct {...props} />}  />
            <Route path={`${url}/:id/edit/`}  render={props => <EditProduct {...props} />}   />
          </>
        )}
      />
      <Route
        path="/category"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`}   render={props => <Category {...props} />} exact />
            <Route path={`${url}/create`}  render={props => <AddCategory {...props} />}  />
            <Route path={`${url}/viewcategory`}  render={props => <ViewCategory {...props} />}  />
          </>
        )}
      />

<Route
        path="/menu"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`}   render={props => <HomePage />} exact />
            
          </>
        )}
      />
    </>
  );
}

export default Routes;