import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../style/MyNavbar.css'
library.add(faPhone, faHeart, faShoppingCart);

const MyNavbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src="/images/logo-1.png" alt="Brand Logo" width="50" height="10" className="img-fluid d-inline-block align-text-top" />
          <span className="">
            <h2 style={{color:'#467991'}}>Eyebeam</h2></span>
        </a>
        <div className="d-flex align-items-center me-auto">
          <FontAwesomeIcon icon="phone" />
          <span className="ms-2">+1-234-567-890</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex ms-auto me-3 ">
            <input className="form-control w-100 me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary"  type="submit">Search</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item text-end">
              <a className="nav-link" href="#track-order">Track Order</a>
            </li>
            <li className="nav-item text-end">
              <a className="nav-link" href="#sign-in">Sign In</a>
            </li>
            <li className="nav-item text-end">
              <a className="nav-link" href="#wishlist">
                <FontAwesomeIcon icon="heart" />
              </a>
            </li>
            <li className="nav-item text-end">
              <a className="nav-link" href="#cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
