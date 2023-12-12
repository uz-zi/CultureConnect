import React, { useState } from 'react';
import pic1 from '../../assets/grey.jpeg';

export default function Adspage() {
  const [profilePic, setProfilePic] = useState(pic1);

  const displaySelectedImage = (event) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <h1 className="my-5" style={{ fontSize: 38 }}>
              Advertise with Us
            </h1>
            <hr />
            <h4 className="mb-4 mt-5 text-center text-dark" style={{ fontSize: "38px" }}>
              Ads pic
            </h4>
            <div className="mb-4 d-flex justify-content-center">
              <img
                id="selectedImage1"
                src={profilePic}
                alt="Profile"
                style={{ width: "400px", height: "400px" }}
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
                  onChange={displaySelectedImage}
                />
                
              </div>
            </div>
            <label className="form-label text-center mt-5 " htmlFor="Adds">Duration<span className='text-danger'>*</span></label>
                            <select class="form-select mb-5" aria-label="Default select example">
                                <option selected>Select Duration</option>
                                <option value="1">1 Day</option>
                                <option value="2">1 week</option>
                                <option value="3">15 days</option>
                                <option value="4">1 month</option>
                                <option value="5">2 months</option>
                                <option value="6">5 months</option>
                                <option value="7">1 Year</option>
                            </select>

                <a
                  className="btn btn-danger mb-5 btn-lg text-light mx-2"
                  
                >
                 <b> Cancel </b>
                </a>
                <a
                  className="btn btn-primary mb-5 text-light btn-lg mx-2"
                >
                 <b> Add Ads </b>
                </a>
          </div>
          <div className="col-md-3"></div>
          
        </div>
      </div>
    </div>
  );
}
