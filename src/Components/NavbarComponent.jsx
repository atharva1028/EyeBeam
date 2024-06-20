import React from 'react';
import '../style/NavbarComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const NavbarComponent = () => {
    let ary = ['Sunglasses','Eyeglasses','kidglasses','Contect lenses','Screenglasses','Home Eye-Test','Store locator'] 
  return (
    <>
    <div className='container'>
      <nav className="navbar  navbar-expand-lg navbar-light nav-2">
        <div className="collapse navbar-collapse  text-center" id="navbarNav">
          <ul className="navbar-nav gap-1">
            {ary.map((_, index) => (
              <li className="nav-item dropdown" key={index}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={`navbarDropdown${index}`}
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {ary[index].toUpperCase()}
                </a>
                <div className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> 
            ))}
            <li><img src="/images/nav-1.png" alt="Brand Logo" width="70" height="30" className="d-inline-block pt-2 align-text-top" /></li>
            <li><img src="/images/nav-3.png" alt="Brand Logo" width="70" height="30" className="d-inline-block pt-2 align-text-top" /></li>
            <li><img src="/images/nav-2.png" alt="Brand Logo" width="70" height="30" className="d-inline-block pt-2 align-text-top" /></li>
        
          </ul>
        </div>
        
      
      </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
