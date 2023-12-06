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


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/emailverification" element={<EmailVerification/>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/dashboard" element={<Dashboard/>}></Route>
        <Route path="/gpt" element={<Chatbot/>}></Route>
        <Route path="/chatbox" element={<Chatbox/>}></Route>
        <Route path="/Landing" element={ <><Navbar/><Hero/></>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
