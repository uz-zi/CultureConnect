// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom"; 
// import { useState, useEffect } from "react";

// export default function Nativeprofile() {
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   console.log(location.state);

//   // Extract the userId from location.state
//   const { userId } = location.state || {};

//   // Log the userId to the console
//   console.log("UserID:", userId);

//   useEffect(() => {
//     console.log("UserID----------------------services page:", userId);
//   }, [userId]);

//   console.log("useeffect ID------------", useEffect.userId);

//   const handleLetsChatClick = () => {
//     navigate("/user/chatbox");
//   };

//   return (
//     <>
//       <head>
//         <title>NewsLetterLandingPage</title>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link href="./output.css" rel="stylesheet" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//           rel="stylesheet"
//         />
//       </head>

//       <body class="font-poppins bg-black relative">
//         <div
//           id="container"
//           class="p-20 w-auto flex px-24 justify-center relative"
//         >
//           <div class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
//             <div class="mr-10">
//               <img
//                 class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
//                 src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
//                 alt="image of myself"
//               />
//             </div>
//             <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
//               <h1 class="text-white font-bold text-3xl mt-6 mb-8">
//                 Hey it's me, Aydin Vesali Moghaddam
//               </h1>

//               <h2 class="text-white font-bold text-2xl mt-6 mb-2">
//                 Province
//               </h2>
//               <h3 class="text-white font-bold text-2xl mt- mb-2">
//                 City
//               </h3>
//               <h3 class="text-white font-bold text-2xl mt- mb-2">
//                 Language
//               </h3>
//               <h3 class="text-white font-bold text-2xl mt- mb-8">
//                 Qualification
//               </h3>


//               <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
//                 I'm Aydin, a 18-year-old high schooler with a passion for web
//                 development. My tech journey started with HTML, CSS, and
//                 JavaScript, and I was hooked by the thrill of crafting dynamic,
//                 interactive websites. As I grew, Node.js and ReactJS became my
//                 go-to tools for building scalable applications. Feel free to
//                 connect if you have questions, collaboration ideas, or just want
//                 to discuss the latest in web development!
//               </p>

//               <div id="social" class="flex flex-col justify-start gap-2">
//                 <a
//                   rel="noopener"
//                   target="_blank"
                  
//                   class="bg-gray-800 rounded-lg p-4 w-64 flex items-center gap-2 text-white"
//                 >
//                   <span>Visit my Github</span>
//                 </a>
//                 <a
//                   rel="noopener"
//                   target="_blank"
                 
//                   class="bg-gray-800 rounded-lg p-4 w-64 flex items-center gap-2 text-white"
//                 >
//                   <span>Follow me on Linkedin</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// }





import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios"; 
import pic2 from "../../assets/profileIcon.png";

export default function Nativeprofile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};

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
  })

  console.log("-------------------",userData.UserID)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Making request for userId:", userId);
        const response = await axios.get(`http://localhost:5000/native/see_native_profile`, { params: { id: userId } });
        console.log("Response received:", response.data);
        // Adjust this line to properly set the state
        setUserData(response.data.Userphoto || response.data); // Fallback to response.data in case the structure is different
      } catch (error) {
        console.error("Error fetching user data: ", error.message);
      }
    };

    
    
  
    if (userId) fetchUserData();
}, [userId]);

const handleNavigation = (userId) => {
  navigate("/user/one_native_all_blog", { state: { userId: userId } });

  console.log("sending user id to my blog page---------", userId)
};

  return (
    <>
      <body class="font-poppins bg-black relative">
        <div id="container" class="p-20 w-auto flex px-24 justify-center relative">
          <div class="p-20 w-auto flex flex-col md:flex-row px-24 relative">
            <div class="mr-10">
              <img
                class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                src={userData.Profile_pic ? `http://localhost:5000/${userData.Profile_pic.replace(/\\/g, '/')}` : pic2}
                alt="Profile"
              />
            </div>
            <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 class="text-white font-bold text-3xl mt-6 mb-8">
                Hey, I'm {userData.FirstName} {userData.LastName}
              </h1>
              <h2 class="text-white font-bold text-2xl mt-6 mb-2">Province: {userData.province}</h2>
              <h3 class="text-white font-bold text-2xl mt- mb-2">City: {userData.city}</h3>
              <h3 class="text-white font-bold text-2xl mt- mb-2">Language: {userData.language}</h3>
              <h3 class="text-white font-bold text-2xl mt- mb-8">Qualification: {userData.Feild_qualification}</h3>
              <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                {userData.service}
              </p>
              <div id="social" class="flex flex-col justify-start gap-2">
                <a
                  rel="noopener"
                  target="_blank"
                  
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

