import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";  

export default function Header() {

  const {itemCount} = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: '105px'}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/product" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/category" className="nav-link">
                Category
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/cart" className="nav-link">
                Cart ({itemCount})
              </Link>
            </li>
          
            <li className="nav-item active">
              <Link to="/singup" className="nav-link">
                Singup
              </Link>
            </li>

            <li className="nav-item active">
              <Link to="/singin" className="nav-link">
                Singin
              </Link>
            </li>
          
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
