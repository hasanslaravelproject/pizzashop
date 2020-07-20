import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import Layout from "./components/Layout.js";
import { BrowserRouter as Router, Switch  } from 'react-router-dom';


ReactDOM.render(
    <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <div className="container" style={{marginBottom: 60}} >
                <Layout>
                  <Routes />
                </Layout>
              </div>
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
