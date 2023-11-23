import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import SignIn from "./pages/SignIn";
import EmailVerification from "./pages/EmailVerification";
import ConfirmEmail from "./pages/ForgotPass/ConfirmEmail";
import Dashboard from "./pages/user/Dashboard";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/user/signin" element={<SignIn/>}></Route>
        <Route path="/emailverification" element={<EmailVerification/>}></Route>
        <Route path="/confirmemail" element={<ConfirmEmail/>}></Route>
        <Route path="/user/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
