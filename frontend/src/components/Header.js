import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Demo Bookshop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart ({cartItemCount})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to my Demo Bookshop</h1>
        <p>Discover unique products and designs</p>
        <Link to="/shop" className="btn btn-light">Shop Now</Link>
      </header>
    </>
  );
};

export default Header;
