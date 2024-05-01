import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios";
import pic2 from "../../assets/profileIcon.png";
import PaymentViaCard from "../Payment/payment_with _card";

export default function Nativeprofile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};
  const currentUserId = JSON.parse(localStorage.getItem("user")).id;
  console.log("--------------------current",currentUserId);

  const [userData, setUserData] = useState({
    Name: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Profile_pic: "",
    city: "",
    province: "",
    language: "",
    service: "",
    qualification: "",
    Feild_qualification: "",
  });

  const [showPaymentCard, setShowPaymentCard] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Making request for userId:", userId);
        const response = await axios.get(
          `http://localhost:5000/native/see_native_profile`,
          { params: { id: userId } }
        );
        console.log("Response received:", response.data);
        setUserData(response.data.Userphoto || response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error.message);
      }
    };
    if (userId) fetchUserData();
  }, [userId]);

  const handleNavigation = (userId) => {
    navigate("/user/one_native_all_blog", { state: { userId: userId } });
    console.log("sending user id to my blog page---------", userId);
  };

  const togglePaymentCard = () => {
    setShowPaymentCard(!showPaymentCard);
  };


    const userState = { senderId: currentUserId, receiverId: userData?.UserID };

  return (
    <>
      <body class="font-poppins bg-black">
        <div id="container" class="p-20 w-auto flex px-24 justify-center">
          <div class="p-20 w-auto flex flex-col md:flex-row px-24 relative">
            <div class="mr-10">
              <img
                class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                src={
                  userData.Profile_pic
                    ? `http://localhost:5000/${userData.Profile_pic.replace(
                        /\\/g,
                        "/"
                      )}`
                    : pic2
                }
                alt="Profile"
              />
            </div>
            <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              {showPaymentCard && <div className="absolute w-fit flex flex-col justify-center items-center rounded-lg shadow-lg bg-white z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 min-w-[350px]">
                {showPaymentCard && <PaymentViaCard data={userState} />}{" "}
                {showPaymentCard && (
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none"
                  onClick={()=> {setShowPaymentCard(!showPaymentCard)}}>
                    Cancel
                  </button>
                )}
              </div>}
              <h1 class="text-white font-bold text-3xl mt-6 mb-8">
                Hey, I'm {userData.FirstName} {userData.LastName}
              </h1>
              <h2 class="text-white font-bold text-2xl mt-6 mb-2">
                Province: {userData.province}
              </h2>
              <h3 class="text-white font-bold text-2xl mt- mb-2">
                City: {userData.city}
              </h3>
              <h3 class="text-white font-bold text-2xl mt- mb-2">
                Language: {userData.language}
              </h3>
              <h3 class="text-white font-bold text-2xl mt- mb-8">
                Qualification: {userData.Feild_qualification}
              </h3>
              <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                {userData.service}
              </p>
              <div id="social" class="flex flex-col justify-start gap-2">
                <a
                  rel="noopener"
                  target="_blank"
                  onClick={(event) => {
                    event.preventDefault();
                    togglePaymentCard();
                    sendDataToPayment();
                  }}
                  
                  class="bg-gray-800 rounded-lg p-4 w-64 flex items-center gap-2 text-white"
                >
                  <span>Learn with me</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  onClick={() => handleNavigation(userData?.UserID)}
                  className="bg-gray-800 rounded-lg p-4 w-64 flex items-center gap-2 text-white"
                >
                  <span>See my blogs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
