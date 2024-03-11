import React from 'react';
import pic2 from "../../assets/ads2.jpg";

export default function ShowAds() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10 my-5">
            <img
              src={pic2}
              style={{ height: '100px', width: '40%', objectFit: 'cover' }}
              alt="ads"
            />
          </div>
          <br />
          <div className="col-md-10 my-5">
            <img
              src={pic2}
              style={{ height: '600px', width: '10%', objectFit: 'cover' }}
              alt="ads"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
