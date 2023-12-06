import React, { useState } from "react";
import useModal from "../../Hooks/useModal";
import ForgotPassOTP from "./ForgotPassOTP";
import axios from "../../axios";

export default function () {
  const [email, setEmail] = useState("");
  const [isOpen, toggleModal] = useModal();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/user/forgetpassword", { email });
      console.log(response);
      if (response.data === "Verification code sent to your email") {
        toggleModal();
      }
    } catch (error) {
      console.log(error);
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
              className="flex px-3 py-2 md:px-4 md:py-3 px-2 py-1 m-1 outline-none rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium bg-green-500 hover:bg-green-70 text-white"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
      {isOpen && <ForgotPassOTP isOpen={isOpen} onClose={toggleModal} />}
    </div>
  );
}
