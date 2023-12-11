import React from 'react'
import logo from "../../assets/logo.png";
export default function Navbar2() {
  return (
    <div>
      <div style={{ backgroundColor: '#FEFBEA', paddingBottom: 5 }} className='navbody'>
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
              
            <div style={{
            
             height: '50px',
             background: '#FEFBEA',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             padding: '0 0px',
          }}>
            <input type="text" style={{width: '300px', height: '38px', borderRadius: '25px', paddingLeft: "8px", }} placeholder="Search "/>
            <button type="button"><ion-icon style={{fontSize:"38px", marginLeft: "3px", marginTop: '7px'}} name="mic-circle"></ion-icon></button>
          </div>


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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
                <li className="nav-item">
                  <a className="navlink nav-link mx-2 my-3" style={{fontSize:'22px',fontFamily: "serif"}} href="#">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navlink nav-link mx-2 my-3" style={{fontSize:'22px',fontFamily: "serif"}} href="#">
                    Social Media
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navlink nav-link mx-2 my-3" style={{fontSize:'22px',fontFamily: "serif"}} href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navlink nav-link mx-2 my-3" style={{fontSize:'22px',fontFamily: "serif"}} href="#">
                    Feedback
                  </a>
                </li>
                <li className="nav-item">
                  <a className="navlink nav-link mx-2 my-3" style={{fontSize:'22px',fontFamily: "serif"}} href="#">
                  <button type="button" class="btn btn-danger">Logout</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    </div>
  )
}
