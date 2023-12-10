import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import ConfirmEmail from "./pages/ForgotPass/ConfirmEmail";
import Dashboard from "./pages/user/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chatbot from "./pages/chatbot/chatbot"
import Navbar from "./pages/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Chatbox from "./pages/Chatbox/Chatbox";
import Userprofile from "./pages/userprofile/userprofile"
import Socialhomepage from "./pages/userprofile/userfeed"
import Social_add_post from "./pages/userprofile/addpost"
import Updtae_prfile from "./pages/EditUserProfile/editprofile"
import UpdatePost from "./pages/userprofile/updatepost";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/forgetPassword" element={<ConfirmEmail/>}></Route>
        <Route path="/user/userprofile" element={<Userprofile/>}></Route>
        <Route path="/user/socialhomepage" element={<Socialhomepage/>}></Route>
        <Route path="/user/Social_add_post" element={<Social_add_post/>}></Route>
        <Route path="/user/update_post" element={<UpdatePost/>}></Route>
        <Route path="/user/Updtae_prfile" element={<Updtae_prfile/>}></Route>
        {/* <Route path="/user/dashboard" element={<Dashboard/>}></Route>
        <Route path="/gpt" element={<Chatbot/>}></Route>
        <Route path="/chatbox" element={<Chatbox/>}></Route>
        <Route path="/Landing" element={ <><Navbar/><Hero/></>}></Route> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
