import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Routes from './Router/Routes';
import Layout from "./components/layout/Layout";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch  } from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductsContextProvider>
        <CartContextProvider>
        <Layout>
          <Switch>
            <div className="container" style={{marginBottom: 60}} >
              <Routes />
            </div>
          </Switch>
        </Layout>
        </CartContextProvider>
      </ProductsContextProvider>
  </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
