import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import SignIn from "./pages/SignIn";
import ConfirmEmail from "./pages/ForgotPass/ConfirmEmail";

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
import Protected from "./pages/protected"
import Adadds from "./pages/Adspage/adspage"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/user/Landing" element={<><Navbar/><Aboutus/><Footerpage/></>}></Route>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/forgetPassword" element={<ConfirmEmail/>} ></Route>



        <Route path="/user/userprofile" element={<Protected component={<Userprofile/>} allowableuser="user"/>}></Route>
        <Route path="/user/socialhomepage" element={<Protected component={<Socialhomepage/>} allowableuser="user"/>}></Route>
        <Route path="/user/Social_add_post" element={<Protected component={<Social_add_post/>} allowableuser="user"/>}></Route>
        <Route path="/user/update_post" element={<Protected component={<UpdatePost/>} allowableuser="user"/>}></Route>
        <Route path="/user/Updtae_prfile" element={<Protected component={<Updtae_prfile/>} allowableuser="user"/>}></Route>
        <Route path="/user/Homepage" element={<Protected component={<><Navbar2/><Homepage/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/Addblog" element={<Protected component={<><Navbar2/><Addblog/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/seeBlogs" element={<Protected component={<><Navbar2/><Blogpage/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/Payment" element={<Protected component={<><Paymentpage/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/Feedback" element={<Protected component={<><Feedbackpage/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/NativeServices" element={<Protected component={<><Navbar2/><Servicepage/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/user/NativeProfile" element={<Protected component={<><Navbar2/><NativeProfile/><Footerpage/></>} allowableuser="user"/>}></Route>
        <Route path="/gpt" element={<Protected component={ <><Nav3/><Chatbot/></>} allowableuser="user"/>}></Route>
        <Route path="/user/chatbox" element={<Protected component={<><Nav3/><Chatbox/></>}allowableuser="user"/>}></Route>



        <Route path="/user/NativeSignup" element={<><NativeSignup/></>}></Route>
        <Route path="/user/NativeSignup2" element={<><NativeSignup2/></>}></Route>
        <Route path="/adminfeedback" element={<Adminfeedback/>}></Route>
        <Route path="/addads" element={<Adadds/>}></Route>

        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App