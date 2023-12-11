import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import pic1 from "../../assets/fade5.jpg";
import pic2 from "../../assets/foreground.jpg";
import pic3 from "../../assets/fade4.jpg";


export default function Hero() {
  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    color: 'white',
    zIndex: 1,
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    zIndex: 1,
  };

  const imageStyle = {
    position: 'relative',
    height: '610px',
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{backgroundColor: '#FEFBEA'}} className="container-fluid">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner" style={{ borderRadius: 0 }}>
          <div className="carousel-item active">
            <div style={textStyle} className='px-lg-5'>
              <h1> Connecting Cultures <br></br>
                Bridging Borders <br></br>
                Embrace Unity.</h1>
              <p className='py-lg-3'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Nam optio dicta accusantium magnam <br /> sint repudiandae, consectetur quasi iste aliquam id?</p>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-primary">Get Started</button>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-secondary mx-3">Work With Us</button>
            </div>
            <img src={pic2} style={imageStyle} alt="Los Angeles" />
          </div>
          <div className="carousel-item">
            <div style={textStyle} className='px-lg-5'>
              <h1> Connecting Cultures <br></br>
                Bridging Borders <br></br>
                Embrace Unity.</h1>
              <p className='py-lg-3'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Nam optio dicta accusantium magnam <br /> sint repudiandae, consectetur quasi iste aliquam id?</p>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-primary">Get Started</button>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-secondary mx-3">Work With Us</button>
            </div>
            <img src={pic1} style={imageStyle} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <div style={textStyle} className='px-lg-5'>
              <h1 style={{color : 'white'}}> Connecting Cultures <br></br>
                Bridging Borders <br></br>
                Embrace Unity.</h1>
              <p className='py-lg-3'>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Nam optio dicta accusantium magnam <br /> sint repudiandae, consectetur quasi iste aliquam id?</p>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-primary">Get Started</button>
              <button style={{fontSize: 20, margin: 5}} className="btn btn-light mx-3">Work With Us</button>
            </div>
            <img src={pic3} style={imageStyle} alt="New York" />
          </div>
        </div>
      </div>
    </div>
  );
}
