import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import pic6 from "../../assets/img6.jpg";
import pic7 from "../../assets/img5.jpg";
import pic8 from "../../assets/img8.jpg";

export default function Nativeprofile() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLetsChatClick = () => {
    navigate('/user/chatbox'); // Navigate to /user/chatbox on click
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h1 className='my-5' style={{ fontSize: '38px' }}>Dr. Ahad Raza</h1>
            <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias autem assumenda veniam tempora expedita iste commodi repellat voluptatibus, laboriosam, asperiores pariatur cupiditate voluptatum! Maiores delectus expedita aliquid beatae impedit? Reiciendis non eligendi provident id perferendis inventore, minus, animi facere, distinctio minima aut quasi voluptatum laboriosam. Quod, minus, consequuntur est minima earum, similique ea autem cupiditate velit neque dignissimos doloribus illum.</p>
            <br />
            <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias autem assumenda veniam tempora expedita iste commodi repellat voluptatibus, laboriosam, asperiores pariatur cupiditate voluptatum! Maiores delectus expedita aliquid beatae impedit? Reiciendis non eligendi provident id perferendis inventore, minus, animi facere, distinctio minima aut quasi voluptatum laboriosam. Quod, minus, consequuntur est minima earum, similique ea autem cupiditate velit neque dignissimos doloribus illum.</p>
            <a
              href="#!"
              className="btn bsb-btn-2xl btn-success my-5"
              style={{ fontSize: 20 }}
              onClick={handleLetsChatClick} // Handle Let's Chat button click
            >
              Let's Chat
            </a>
          </div>
          <div className="col-md-4 my-5">
            <img className="img-fluid" style={{ width: '350', height: '350' }} loading="lazy" src={pic8} alt="Taytum Elia" />
          </div>
        </div>
      </div>
    </div>
  );
}
