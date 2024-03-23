import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import SignIn from "./pages/SignIn";
import ConfirmEmail from "./pages/ForgotPass/ConfirmEmail";
import Adds from "./pages/Adspage/showads"
import Chatbot from "./pages/chatbot/chatbot"
import Navbar from "./pages/Navbar/Navbar";
import Navbar2 from "./pages/Navbar/Navbar2"
import Chatbox from "./pages/Chatbox/Chatbox";
import Userprofile from "./pages/userprofile/userprofile"
import Socialhomepage from "./pages/userprofile/userfeed"
import Social_add_post from "./pages/userprofile/addpost"
import Updtae_prfile from "./pages/EditUserProfile/editprofile"
import UpdatePost from "./pages/userprofile/updatepost";
import Aboutus from "./pages/AboutUs/aboutus";
import Footerpage from "./pages/Footer/footer";
import Feedbackpage from "./pages/Feedback/feedback";
import Paymentpage from "./pages/Payment/paymentpage";
import Homepage from "./pages/Home/home";
import Blogpage from "./pages/Home/articlepage";
import Addblog from "./pages/Home/addblog";
import NativeSignup from "./pages/NativeSignup/nativeSignup"
import NativeSignup2 from "./pages/NativeSignup/NativeSignup2";
import Servicepage from "./pages/Services/servicepage";
import NativeProfile from "./pages/Services/Nativeprofile";
import Nav3 from "./pages/Navbar/Navbar3";
import Adminfeedback from "./pages/Admin/Adminpanel";
import Protected from "./pages/protected"
import Adadds from "./pages/Adspage/adspage";
import AllUsersProfile from "./pages/ALL_USERS_PROFILE";
import SeeOtherUserProfile from "./pages/View_another_user_profile/userprofile";
import OneNativeallblog from "./pages/Home/my_blogs"

import { UserContext } from "./Context/UserContext";


function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch the user from local storage on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []); //

  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
      <Routes>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/user/NativeSignup" element={<><NativeSignup/></>}></Route>
        <Route path="/native/NativeSignin" element={<><NativeSignup2/></>}></Route>
        <Route path="/Landing" element={<><Navbar/><Aboutus/><Footerpage/></>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/forgetPassword" element={<ConfirmEmail/>} ></Route>


        <Route path="/user/userprofile" element={<Userprofile/>}></Route>
        <Route path="/user/socialhomepage" element={<Socialhomepage/>}></Route>
        <Route path="/user/Social_add_post" element={<Social_add_post/>}></Route>
        <Route path="/user/update_post" element={<UpdatePost/>}></Route>
        <Route path="/user/Updtae_prfile" element={<Updtae_prfile/>}></Route>
        
        <Route path="/user/Homepage" element={<div>
          <Chatbot/><Navbar2/><Homepage/><Footerpage/></div>}></Route>
          
        <Route path="/user/chatbox" element={<><Nav3/><Chatbox/></>}></Route>
        <Route path="/allUsersProfile" element={<><Nav3/><AllUsersProfile/><Footerpage/></>}></Route>
        <Route path="/OtherUserProfile" element={<SeeOtherUserProfile/>}></Route>
        


         {/* -----------------------------------done for user */}

         <Route path="/user/seeBlogs" element={<><Navbar2/><Blogpage/><Footerpage/></>}></Route>
         <Route path="/user/NativeProfile" element={<><Navbar2/><NativeProfile/><Footerpage/></>}></Route>
         <Route path="/user/Addblog" element={<><Navbar2/><Addblog/><Footerpage/></>}></Route>
         <Route path="/user/one_native_all_blog" element={<><Navbar2/><OneNativeallblog/><Footerpage/></>}></Route>


        
        <Route path="/user/Payment" element={<><Paymentpage/><Footerpage/></>}></Route>
        <Route path="/user/Feedback" element={<><Feedbackpage/><Footerpage/></>}></Route>
        <Route path="/user/NativeServices" element={<><Navbar2/><Servicepage/><Footerpage/></>}></Route>
        <Route path="/adminfeedback" element={<Adminfeedback/>}></Route>
        <Route path="/addads" element={<Adadds/>}></Route>
        <Route path="/ads" element={<Adds/>}></Route>  
        

      </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App