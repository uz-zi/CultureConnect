import React from 'react';
import logo from "../../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function NativeSignup2() {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundColor: 'white',
  };

  const handleSignUpClick = () => {
    // Navigate to the "/user/signin" route when the "SignUp" button is clicked
    navigate('/user/signin');
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
                          <label className="form-label" htmlFor="NativeSignup">City<span className='text-danger'>*</span></label>
                          <select className="form-select" id="form2Example11">
                            <option>Select City</option>
                            <option>Abbottabad</option>
                            <option>Attock</option>
                            <option>Bahawalnagar</option>
                            <option>Bahawalpur</option>
                            <option>Burewala</option>
                            <option>Chaman</option>
                            <option>Chiniot</option>
                            <option>Dera Ghazi Khan</option>
                            <option>Dera Ismail Khan</option>
                            <option>Faisalabad</option>
                            <option>Fateh Jang</option>
                            <option>Gawadar</option>
                            <option>Gujranwala</option>
                            <option>Gujrat</option>
                            <option>Haripur</option>
                            <option>Hyderabad</option>
                            <option>Islamabad</option>
                            <option>Jacobabad</option>
                            <option>Jhang</option>
                            <option>Jhelum</option>
                            <option>Karachi</option>
                            <option>Kasur</option>
                            <option>Khairpur</option>
                            <option>Khanewal</option>
                            <option>Kharian</option>
                            <option>Khuzdar</option>
                            <option>Kohat</option>
                            <option>Lahore</option>
                            <option>Larkana</option>
                            <option>Mardan</option>
                            <option>Mingora (Swat)</option>
                            <option>Mirpur</option>
                            <option>Multan</option>
                            <option>Murree</option>
                            <option>Muzaffarabad</option>
                            <option>Nawabshah</option>
                            <option>Nowshera</option>
                            <option>Okara</option>
                            <option>Peshawar</option>
                            <option>Quetta</option>
                            <option>Rahim Yar Khan</option>
                            <option>Rawalpindi</option>
                            <option>Sahiwal</option>
                            <option>Sargodha</option>
                            <option>Sheikhupura</option>
                            <option>Sialkot</option>
                            <option>Sukkur</option>
                            <option>Toba Tek Singh</option>
                            <option>Vehari</option>
                            <option>Zhob</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Province<span className='text-danger'>*</span></label>
                          <select className="form-select" id="form2Example11">
                            <option>Select Province</option>
                            <option>Punjab</option>
                            <option>Sindh</option>
                            <option>Khyber Pakhtunkhwa</option>
                            <option>Balochistan</option>
                          </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Language<span className='text-danger'>*</span></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Language</option>
                                <option value="1">Urdu</option>
                                <option value="2">Punjabi</option>
                                <option value="3">Saraiki</option>
                                <option value="4">Pashto</option>
                                <option value="5">Balochi</option>
                                <option value="6">Sindhi</option>
                                <option value="7">Hindko</option>
                                <option value="8">Brahui</option>
                            </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Service<span className='text-danger'>*</span></label>
                          <input type="text" id="form2Example11" className="form-control" placeholder="Enter the Provided Service " />
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="NativeSignup">Qualification <span className='text-danger'>*</span></label>
                          <select className="form-select" aria-label="Default select example">
                                <option selected>Select Qualification</option>
                                <option value="1">Intermediate</option>
                                <option value="2">BS</option>
                                <option value="3">MS</option>
                                <option value="4">Phd</option>
                            </select>
                        </div>
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="form2Example22">Field<span className='text-danger'>*</span></label>
                          <input type="text" id="form2Example22" placeholder="Enter Field" className="form-control" />
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
                            onClick={handleSignUpClick} // Call handleSignUpClick on button click
                          >
                            SignUp
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
