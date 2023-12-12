import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import ConfirmEmail from "./pages/ForgotPass/ConfirmEmail";
import Dashboard from "./pages/user/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


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
import Nav3 from "./pages/Navbar/Navbar3"
import Adminfeedback from "./pages/Admin/Adminpanel"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/user/Landing" element={<><Navbar/><Aboutus/><Footerpage/></>}></Route>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/forgetPassword" element={<ConfirmEmail/>}></Route>
        <Route path="/user/userprofile" element={<Userprofile/>}></Route>
        <Route path="/user/socialhomepage" element={<Socialhomepage/>}></Route>
        <Route path="/user/Social_add_post" element={<Social_add_post/>}></Route>
        <Route path="/user/update_post" element={<UpdatePost/>}></Route>
        <Route path="/user/Updtae_prfile" element={<Updtae_prfile/>}></Route>
        <Route path="/user/Navbar" element={<><Navbar/></>}></Route>
        <Route path="/user/Homepage" element={<><Navbar2/><Homepage/><Footerpage/></>}></Route>
        <Route path="/user/Addblog" element={<><Navbar2/><Addblog/><Footerpage/></>}></Route>
        <Route path="/user/seeBlogs" element={<><Navbar2/><Blogpage/><Footerpage/></>}></Route>
        <Route path="/user/Payment" element={<><Paymentpage/><Footerpage/></>}></Route>
        <Route path="/user/Feedback" element={<><Feedbackpage/><Footerpage/></>}></Route>
        <Route path="/user/NativeServices" element={<><Navbar2/><Servicepage/><Footerpage/></>}></Route>
        <Route path="/user/NativeProfile" element={<><Navbar2/><NativeProfile/><Footerpage/></>}></Route>
        <Route path="/gpt" element={<><Nav3/><Chatbot/></>}></Route>
        <Route path="/user/chatbox" element={<><Nav3/><Chatbox/></>}></Route>


        
        <Route path="/user/NativeSignup" element={<><NativeSignup/></>}></Route>
        <Route path="/user/NativeSignup2" element={<><NativeSignup2/></>}></Route>
        <Route path="/adminfeedback" element={<Adminfeedback/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App