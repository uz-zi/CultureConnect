import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic3 from "../../assets/fade4.jpg";
import pic4 from "../../assets/fade3.jpg";
import pic5 from "../../assets/fade2.jpg";
import pic6 from "../../assets/img6.jpg";
import pic7 from "../../assets/img5.jpg";
import pic8 from "../../assets/img8.jpg";
import pic12 from "../../assets/light11.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function ServicePage() {
    const navigate = useNavigate(); 

    return (
        <div style={{backgroundColor: '#FEFBEA'}}>
            <br />
            <h1 className="mb-5 mb-xl-4 text-uppercase text-center my-5" style={{backgroundColor: '#FEFBEA', fontSize: '38px'}}> Native Services </h1>
            <section className="py-3 py-md-5 py-xl-8" style={{backgroundColor: '#FEFBEA'}}>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            {/* ... (your existing code) */}
                        </div>
                    </div>
                </div>

                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 gx-xxl-5">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                <div className="card-body p-0">
                                    <figure className="m-0 p-0">
                                        <img className="img-fluid" loading="lazy" src={pic6} alt="Flora Nyra"/>
                                        <figcaption className="m-0 p-4">
                                            <h4 className="mb-1">Dr. Usman </h4>
                                            <p className="text-secondary mb-0">Cultural Guider</p>
                                            <div className='text-center my-3'>
                                                <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={() => navigate('/user/NativeProfile')}>Read More</a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                <div className="card-body p-0">
                                    <figure className="m-0 p-0">
                                        <img className="img-fluid" loading="lazy" src={pic7} alt="Evander Mac"/>
                                        <figcaption className="m-0 p-4">
                                            <h4 className="mb-1">Ali Raza</h4>
                                            <p className="text-secondary mb-0">Tour Guider</p>
                                            <div className='text-center my-3'>
                                                <a href="#!" className="btn bsb-btn-2xl btn-primary " style={{fontSize: 20}} onClick={() => navigate('/user/NativeProfile')} >Read More</a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                                <div className="card-body p-0">
                                    <figure className="m-0 p-0">
                                        <img className="img-fluid" loading="lazy" src={pic8} alt="Taytum Elia"/>
                                        <figcaption className="m-0 p-4">
                                            <h4 className="mb-1">Dr. Ahad Raza</h4>
                                            <p className="text-secondary mb-0">Language Expert</p>
                                            <div className='text-center my-3'>
                                                <a
                                                    href="#!"
                                                    className="btn bsb-btn-2xl btn-primary "
                                                    style={{ fontSize: 20 }}
                                                    onClick={() => navigate('/user/NativeProfile')} // Navigate to /NativeProfile on click
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
