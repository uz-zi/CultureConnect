import React, { useState } from "react";
import axios from "../../axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import backgroundimage from "../../assets/fade5.jpg";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";



function LoginForm() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
      const response = await axios.post("/native/signIn", {
        email: email,
        pass: password,
      });

      console.log(response);

      if (response.status === 200) {
        const userInfo = {
          token: response.data.accessToken,
          id: response.data.user_ID.UserID,
          roles: response.data.user_ID.role,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
        navigate("/user/Homepage");
      } else if (response.status === 401) {
        setErrorMessage("Invalid Credentails");
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid Credentails");
      setError(true);
    }
    } else {
      setErrorMessage("Please ensure all fields are correctly filled out.");
    }
  };

  return (
    <>
      <style>
        {`
          .custom-submit-btn {
            background-color: #22C55E; /* Custom color */
          }

          .custom-submit-btn:hover {
            background-color: #EC4899; /* Hover color */
          }

          .blur-bg-wrapper {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
          }

          .blur-bg-wrapper::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url(${backgroundimage});
            background-size: cover;
            background-position: center;
            filter: blur(8px);
            z-index: -1;
          }

          .content {
            position: relative;
            z-index: 1;
          }
        `}
      </style>
      <div>
        <div className="flex h-screen blur-bg-wrapper">
          <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
            <img className="w-20 mx-auto mb-5" src={logo} />
            <div style={{ textAlign: 'center', color: '#22C55E'}}>we are CultureConnect team</div>
            {errorMessage && (
              <div className="text-red-500 text-center">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-indigo-500" htmlFor="username">
                  Email
                </label>
                <input
                  className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                  type="text"
                  name="username"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-indigo-500" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full text-white font-bold py-2 px-4 mb-6 rounded custom-submit-btn"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <footer>
              <a
                className="text-indigo-700 hover:text-pink-700 text-sm float-left"
                
                onClick={() => navigate("/user/forgetPassword", {
                  state: {
                    role: 'native',
                  },
                })}
              >
                Forgot Password?
              </a>
              <a
                className="text-indigo-700 hover:text-pink-700 text-sm float-right"
                href="#" onClick={() => navigate("/user/NativeSignup")}
              >
                Create Account
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
