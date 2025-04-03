import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Demo Bookshop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="/cart">Cart (<span id="cart-count">0</span>)</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to my Demo Bookshop</h1>
        <p>Discover unique products and designs</p>
        <a href="/shop" className="btn btn-light">Shop Now</a>
      </header>
    </>
  );
};

export default Header;
