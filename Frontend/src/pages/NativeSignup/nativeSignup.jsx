import React from 'react';
import logo from "../../assets/logo.png";
import '../NativeSignup/NativeSignup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function NativeSignup() {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundColor: 'white',
  };

  return (
    <div>
      <section className="h-100 gradient-form" style={sectionStyle}>
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-12 col-lg-12">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center center">
                        <div className="center">
                          <img src={logo} style={{
                            width: '75px',
                            alignItems: 'center',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }} alt="logo" />
                        </div>
                        <h4 className="mt-1 mb-5 pb-1">We are The CultureConnect Team</h4>
                      </div>
                      <form>
                        <p>Please Signup to your account</p>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">First Name<span className='text-danger'>*</span></label>
                          <input type="text" id="form2Example11" className="form-control" placeholder="Enter First Name" />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Last Name<span className='text-danger'>*</span></label>
                          <input type="text" id="form2Example11" className="form-control" placeholder="Enter Last Name" />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Nick Name<span className='text-danger'>*</span></label>
                          <input type="text" id="form2Example11" className="form-control" placeholder="Enter Nick Name" />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Phone Number<span className='text-danger'>*</span></label>
                          <input type="tel" id="form2Example11" className="form-control" placeholder="Enter Phone no" />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Email <span className='text-danger'>*</span></label>
                          <input type="email" id="form2Example11" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form2Example22">Password<span className='text-danger'>*</span></label>
                          <input type="password" id="form2Example22" placeholder="Enter Password" className="form-control" />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            type="button"
                            className="btn btn-success btn-lg mb-3"
                            style={{
                              backgroundColor: '#34D399',
                              borderColor: '#34D399',
                              borderRadius: '1.5rem',
                              padding: '8px 20px',
                              fontSize: '1.25rem',
                              fontWeight: 'bold',
                              color: '#FFF',
                              transition: 'background-color 0.3s',
                            }}
                            onClick={() => navigate('/user/NativeSignup2')}
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      {/* Your content for the right side of the card */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
