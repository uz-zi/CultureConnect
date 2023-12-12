import React, { useState } from 'react';
import pic3 from "../../assets/fade4.jpg";
import pic4 from "../../assets/fade3.jpg";
import pic5 from "../../assets/fade2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

  const navigateToBloges = () => {
    navigate("/user/seeBlogs");
  };
  
    return (
      <div>

        <br />
        <h1 className="mb-3 mb-xl-4 text-uppercase text-center my-5" style={{fontSize: '38px'}}> Blogs </h1>
        <hr />
        <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0">
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic3} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Vision</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                      <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={navigateToBloges} >Read More</a>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic4} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                       <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={navigateToBloges}>Read More</a>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic5} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={navigateToBloges}>Read More</a>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
           
            <div className='mb-5'></div>
            </div>
        </div>
      </div>
  );
}
