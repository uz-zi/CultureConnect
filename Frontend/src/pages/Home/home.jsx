import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import pic1 from "../../assets/fade5.jpg";
import pic2 from "../../assets/foreground.jpg";
import pic3 from "../../assets/fade4.jpg";
import pic4 from "../../assets/fade3.jpg";
import pic5 from "../../assets/fade2.jpg";
import pic6 from "../../assets/interior.jpg";
import pic7 from "../../assets/intique.jpg";
import pic8 from "../../assets/light1.jpg"
import pic9 from "../../assets/light2.jpg"
import pic10 from "../../assets/light9.jpg"
import pic11 from "../../assets/light10.jpg"
import pic12 from "../../assets/light11.jpg"
import pic13 from "../../assets/light12.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Home() {
    return (
      <div>
        {/*Header*/}
        <header className="masthead" style={{ backgroundImage: `url(${pic2})`, height: "450px", backgroundSize: 'cover'}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-Left">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading" style={{color: 'white'}}>
                            <h1 style={{marginTop: '170px'}}>Lets Revive the Culture Together.</h1>
                            <h2 className="subheading">Explore the Hidden jems of the Culture Together.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/*Blog pages*/}
        <br />
        <h1 className="mb-3 mb-xl-4 text-uppercase text-center my-5"> Blogs </h1>
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
                        <button class="btn btn-primary" type="submit">Read More</button>
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
                        <button class="btn btn-primary" type="submit">Read More</button>
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
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic10} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Vision</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic7} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic8} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic7} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Vision</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic12} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
                      </div>
                      
                    </div>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-12 col-lg-4 mt-5">
                <article>
                <div className="card border-0">
                    <img className="card-img-top img-fluid m-0" loading="lazy" src={pic13} alt=""/>
                    <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                        <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">Our Approach</a>
                        </h2>
                    </div>
                    <div className='text-justify-center'>
                      <p className="card-text entry-summary text-secondary mb-3">Welcome to our design agency, where creativity knows no bounds and innovation takes center stage. We are a team of dedicated designers, strategists, and visionaries with a passion for transforming ideas into captivating visuals.</p>
                      <div className='text-center'>
                        <button class="btn btn-primary" type="submit">Read More</button>
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
