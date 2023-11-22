import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import SignIn from "./pages/SignIn"
import EmailVerification from "./pages/EmailVerification";
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/emailverification" element={<EmailVerification/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
