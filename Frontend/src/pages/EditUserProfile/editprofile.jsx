import React, { useState } from 'react';
import pic1 from '../../assets/grey.jpeg'

export default function EditProfile() {
  const formcontent = {
    display: 'block',
        width: '100%',
        padding: '0.5rem 1rem',
        fontSize: '0.9375rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#29292e',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #e5dfe4',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        borderRadius: '5px',
  };

  function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        selectedImage.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  return (
    <div style={{ marginTop: '20px', color: '#9b9ca1' }}>
      <div className="container-fluid" style={{ backgroundColor: '#D3D3D3' }}>
        <div className="row">
          <div className="col-12">
            <div className="my-5 text-dark">
              <h3 style={{ fontSize: '38px' }}>My Profile</h3>
              <hr />
            </div>

            <form className="file-upload">
              <div className="row mb-5 gx-5">
                <div className="col-xxl-8 mb-5 mb-xxl-0">
                  <form method="post" action="/upload" encType="multipart/form-data">
                    {/* Your form fields */}
                    <div className="bg-secondary-soft px-4 py-5 rounded mx-5" style={{backgroundColor: 'rgba(208, 212, 217, 0.1) !important',    borderRadius: '5px !important', paddingTop: '3rem !important' , paddingBottom: '3rem !important', paddingRight: '1.5rem !important', paddingLeft: '1.5rem !important'}}>
                                    <div className="row g-3">
                                        <br /><br /><br />
                                        <h4 className="mb-4 mt-0 text-dark" style={{fontSize: '38px'}}>Contact detail</h4>
                                      
                                        <div className="col-md-12 text-dark">
                                            <label className="form-label">First Name *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter First Name" aria-label="First name" value=""/>
                                        </div>
                                        <div className="col-md-12 text-dark">
                                            <label className="form-label">Last Name *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Last Name" aria-label="Last name" value=""/>
                                        </div>
                                   
                                        <div className="col-md-12 text-dark">
                                            <label className="form-label">Nick Name *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Nick Name" aria-label="Nick name" value=""/>
                                        </div>
                                      
                                        <div className="col-md-12 text-dark">
                                            <label className="form-label">Phone number *</label>
                                            <input type="text" className="form-control" style={{formcontent}} placeholder="Enter Phone no." aria-label="Phone number" value=""/>
                                        </div>
                                    </div> 
                                </div>
                  </form>
                </div>
                <div className="col-xxl-4">
                <h4 className="mb-4 mt-5 text-center text-dark" style={{fontSize: '38px'}}>Profile pic</h4>
                  <div className="mb-4 d-flex justify-content-center">
                    <img
                      id="selectedImage1"
                      src={pic1}
                      alt="example placeholder"
                      style={{ width: '300px', height: '300px' }} // Use object syntax for inline styles
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded">
                      <label className="form-label text-white m-1" htmlFor="customFile1">
                        Choose file
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile1"
                        onChange={(event) => displaySelectedImage(event, 'selectedImage1')} // Correct usage of onchange
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 mb-5 mb-xxl-0">
                  {/* Second file upload section */}
                  <hr className="text-dark mx-5" />
                  <h4 className="mb-4 mt-0 text-center text-dark" style={{fontSize: '38px'}}>Banner Picture</h4>
                  <div className="mb-4 d-flex justify-content-center">
                    <img
                      id="selectedImage2"
                      src={pic1}
                      alt="example placeholder"
                      style={{ width: '1100px', height: '300px' }} // Use object syntax for inline styles
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded">
                      <label className="form-label text-white m-1" htmlFor="customFile2">
                        Choose file
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile2"
                        onChange={(event) => displaySelectedImage(event, 'selectedImage2')} // Correct usage of onchange
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="text-dark mx-5" />
              <form action="">
                <div className="gap-1 d-md-flex justify-content-md-end text-center">
                  <button type="button" className="btn btn-danger my-5  btn-lg" style={{ backgroundColor: 'red' }}>
                    Delete profile
                  </button>
                  <button type="button" className="btn btn-primary my-5  btn-lg" style={{ backgroundColor: 'blue' }}>
                    Update profile
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
