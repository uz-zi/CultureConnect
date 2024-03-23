import React, { useState } from "react";
import useModal from "../../Hooks/useModal";
import ForgotPassOTP from "./ForgotPassOTP";
import axios from "../../axios";
import { useLocation, useNavigate } from "react-router-dom";


export default function () {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {};
  console.log("role----------", role);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Assuming a simple state management for modal visibility
  const [userRole, setUserRole] = useState(role); // Managing user role state

  const toggleModal = () => setIsOpen(!isOpen); // Toggle modal visibility

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = role === "native" ? "/native/forgetpassword" : "/user/forgetpassword";
    try {
      const response = await axios.post(endpoint, { email });
      console.log(response);
      if (response.data === "Verification code sent to your email") {
        setUserRole(role); // Set the user role when opening the modal
        toggleModal(); // Now we also have the role ready to be passed to the modal
      } else if (response.status === 404) {
        alert("Email not found");
      } else {
        alert('An unexpected error occurred');
      }
    } catch (error) {
      console.error("Error object:", error);
      if (error.response && error.response.status === 404) {
        alert("Email not found");
      } else {
        alert('Error sending request');
      }
    }
  };

  return (
    <div className="bgForm w-full max-w-lg p-4 mx-auto px-6 py-5 rounded-xl shadow-md flex flex-col my-36">
      <form action="" onSubmit={handleSubmit}>
        <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
          <div class="flex flex-col space-y-2 text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Confirm Email</h2>
            <p class="text-md md:text-xl">Enter Your Email.</p>
          </div>
          <div class="flex flex-col max-w-md space-y-5">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex px-3 py-2 md:px-4 md:py-3 m-1 outline-none rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-green-500 hover:bg-green-70 text-white"
            >
              Confirm
            </button>

            <button
             onClick={() => navigate('/user/signin')
            }
              type="submit"
              class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-danger text-white"
            >
              Cancel
            </button>

          </div>
        </div>
      </form>
      {isOpen && <ForgotPassOTP isOpen={isOpen} onClose={toggleModal} role={userRole} />}
    </div>
  );
}
