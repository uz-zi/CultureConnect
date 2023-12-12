// Navbar3.js
import React, { useState } from 'react';
import '../Navbar/Navbar3.css'; // Adjust the path to your CSS file
import logo from '../../assets/logo.png';

export default function Navbar3() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <nav id="my-nav3">
        <input type="checkbox" id="check3" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="check3" className="checkbtn" id="checkbtnn3">
          <i className="fas fa-bars"></i>
        </label>
        <label id="my-logo3">CultureConnect</label>

        <ul id="ul-design3" className={isChecked ? 'active' : ''}>
          <li className="li-design3">
            <a className="my-nav-link3 btn text-light" href="#" style={{fontSize:22}}>
              Blogs
            </a>
          </li>
          <li className="li-design3">
            <a className="my-nav-link3 btn text-light" href="#" style={{fontSize:22}}>
              SocialMedia
            </a>
          </li>
          <li className="li-design3">
            <a className="my-nav-link3 btn text-light" href="#" style={{fontSize:22}}>
              Services
            </a>
          </li>
          <li className="li-design3">
            <a className="my-nav-link3 btn text-light" href="#" style={{fontSize:22}}>
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
