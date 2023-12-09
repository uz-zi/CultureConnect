import React from 'react';
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";

const navbarStyle = {
  backgroundImage: `url('path_to_your_image.jpg')`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};




export default function Navbar() {
  return (
    <div style={{backgroundColor: '#FEFBEA', paddingBottom: 5}} className='navbody'>
      <nav className="navbar navbar-expand-lg  mb-lg-1">
        <a className="navbar-brand px-lg-5 px-sm-2 d-flex align-items-center" href="#">
            <img style={{ width: 40 }} src={logo} alt="" />
            <span
                style={{
                    paddingLeft: 5,
                    fontFamily: 'Dancing Script, cursive',
                    fontSize: 30,
                    backgroundImage: 'linear-gradient(to right, green, red, purple)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold'
                }}
                >
                Culture Connect
            </span>

        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0 mx-5">
            <li  className="nav-item">
              <a className="navlink nav-link mx-2 my-3" style={{fontFamily: "'Dancing Script', 'cursive'", fontSize: '22px', padding: '1px'}} href="#">
                Services
              </a>
            </li>
            <li  className="nav-item">
              <a className="navlink nav-link mx-2 my-3 navigationlinks"  style={{fontFamily: "'Dancing Script', 'cursive'", fontSize: '22px', padding: '1px'}} href="#">
                Our Team
              </a>
            </li>
            <li  className="nav-item" >
              <a className="navlink nav-link mx-2 my-3 navigationlinks"  style={{fontFamily: "'Dancing Script', 'cursive'", fontSize: '22px', padding: '1px'}} href="#">
                About Us
              </a>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}