import React, { useState } from "react";
import axios from "./../axios";
import { useNavigate, Link } from "react-router-dom";
import EmailVerification from "./EmailVerification";
import useModal from "../Hooks/useModal";
import pic13 from "../assets/light11.jpg";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

function signin() {
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const [isOpen, toggleModal] = useModal();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    setPassword(value);
    setPasswordError(!passwordRegex.test(value));
  };
  const controlFormToggle = () => {
    setIsLoginForm(!isLoginForm);
    setEmail("");
    setFirstname("");
    setLastname("");
    setName("");
    setPassword("");
    setPhone("");
    setError(false);
    setPhoneError(false);
    setEmailError(false);
    setFirstnameError(false);
    setLastnameError(false);
    setNicknameError(false);
    setPasswordError(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const phoneRegex = /^03\d{9}$/;
    setPhone(value);
    setPhoneError(!phoneRegex.test(value) || value === "");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex =
      /^(?:[a-zA-Z0-9._%+-]+@gmail\.com|[a-z][0-9]{6}@cfd\.nu\.edu\.pk)$/;
    setEmail(value);
    setEmailError(!emailRegex.test(value));
  };

  const handleFirstnameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[A-Za-z]{3,}[A-Za-z]*$/; // At least 3 characters, only letters
    setFirstname(value);
    setFirstnameError(!nameRegex.test(value));
  };

  const handleLastnameChange = (e) => {
    const value = e.target.value;
    setLastname(value);
    setLastnameError(!value || value.length < 3); // Assuming you want at least 3 characters
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNicknameError(!value || value.length < 3); // Assuming you want at least 3 characters
  };

  const handleSignup = async () => {
    if (
      !firstname ||
      !lastname ||
      !name ||
      !phone ||
      !email ||
      !password ||
      firstnameError ||
      lastnameError ||
      nicknameError ||
      phoneError ||
      emailError ||
      passwordError
    ) {
      setErrorMessage("Please Validate First!");
      setError(true);
    } else {
      try {
        const response = await axios.post("/user/signUpUser", {
          name: name,
          fname: firstname,
          lname: lastname,
          email: email,
          pnum: phone,
          pass: password,
        });
        

        console.log(response);

        if (response.data === "Verification code sent to email.") {
          clearTextBox();
          toggleModal();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.message);
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/user/signIn", {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      if (email && password) handleLogin();
    } else {
      if (lastname && name && firstname && email && password) handleSignup();
    }
  };

  const clearTextBox = () => {
    setEmail("");
    setFirstname("");
    setLastname("");
    setName("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="flex overflow-hidden relative min-h-screen">
      <div
        id="SC"
        className={`flex-1 bg-gray-200 justify-center items-center duration-700 hidden md:flex transition-all ease-in-out ${
          isLoginForm ? "right-0" : "left-0"
        } ${isLoginForm ? "translte-x-0" : ""}`}
        style={{
          backgroundImage: `url(${pic13})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold"
            style={{
              color: "#fff",
              textShadow:
                "16px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
              fontSize: "42px",
            }}
          >
            Welcome to cultureConnect!
          </h1>
          <p
            className="text-gray-500 text-lg mt-4"
            style={{
              color: "#fff",
              textShadow:
                "16px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
            }}
          >
            Plateform to revive the culture of pakistan
          </p>
        </div>
      </div>
      <div
        id="LSF"
        className={`flex-1 flex justify-center items-center duration-700 transition-all ease-in-out${
          isLoginForm ? "left-0" : "right-0"
        } ${isLoginForm ? "-translte-x-0" : ""}`}
      >
        <div className="w-[400px] bgForm px-6 py-5 rounded-xl shadow-md flex flex-col my-5">
          <h2 className="text-center text-2xl py-8 font-bold">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          {error && (
            <div
              style={{ color: "white", textAlign: "center", background: "red" }}
            >
              {errorMessage}
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              {isLoginForm ? (
                <>
                  <div className="flex flex-col m-3">
                    <label htmlFor="email">Email</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={handleEmailChange} // Correctly pass the function reference here
                    />
                    {emailError && (
                      <div style={{ color: "#22C55E" }}>
                        Please enter a valid email address. (e.g.,
                        example@gmail.com or f000000@cfd.nu.edu.pk).
                      </div>
                    )}
                    <label htmlFor="pass">Password</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${
                        passwordError ? "border-red-500" : ""
                      }`}
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <div style={{ color: "#22C55E" }}>
                        Please enter a valid password with at least 6
                        characters, including 1 alphabetic, 1 special character,
                        and 1 numeric.
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col mt-[20px] mb-[20px]">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="First Name"
                      type="text"
                      name="firstname"
                      id="firstname"
                      required
                      value={firstname}
                      onChange={handleFirstnameChange}
                    />
                    {firstnameError && (
                      <div style={{ color: "#22C55E" }}>
                        First name should start with a letter and be at least 3
                        characters long.
                      </div>
                    )}

                    <label htmlFor="lastname">Last Name</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="Last Name"
                      type="text"
                      name="lastname"
                      id="lastname"
                      required
                      value={lastname}
                      onChange={handleLastnameChange}
                    />
                    {lastnameError && (
                      <div style={{ color: "#22C55E" }}>
                        Last name should start with a letter and be at least 3
                        characters long.
                      </div>
                    )}

                    <label htmlFor="name">NickName</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="Nickname"
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={name}
                      onChange={handleNicknameChange}
                    />
                    {nicknameError && (
                      <div style={{ color: "#22C55E" }}>
                        Nick name should start with a letter and be at least 3
                        characters long.
                      </div>
                    )}

                    <label htmlFor="pnum">Phone Number</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="Phone Number"
                      type="text"
                      name="pnum"
                      id="pnum"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && (
                      <div style={{ color: "#22C55E" }}>
                        Enter number in format 03XXXXXXXXX.
                      </div>
                    )}

                    <label htmlFor="">Email</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={handleEmailChange} // Correctly pass the function reference here
                    />
                    {emailError && (
                      <div style={{ color: "#22C55E" }}>
                        Please enter a valid email address. (e.g.,
                        example@gmail.com or f000000@cfd.nu.edu.pk).
                      </div>
                    )}

                    <label htmlFor="">Password</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${
                        passwordError ? "border-red-500" : ""
                      }`}
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <div style={{ color: "#22C55E" }}>
                        Please enter a valid password with at least 6
                        characters, including 1 alphabetic, 1 special character,
                        and 1 numeric.
                      </div>
                    )}
                  </div>
                </>
              )}
              {isLoginForm ? (
                <>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 duration-200 mx-auto text-lg px-5 py-1 border-2 rounded-3xl text-white my-1"
                  >
                    LogIn
                  </button>

                  <p className="text-gray-500 text-center m-4">
                    Not Registered Yet?{" "}
                    <button
                      type="button"
                      onClick={controlFormToggle}
                      className="text-blue-500 hover:text-blue-700 underline p-1"
                    >
                      SignUp
                    </button>
                    <div className="flex p-3 justify-center items-center">
                      <Link
                        to="/user/forgetPassword"
                        className="text-blue-500 hover:text-blue-700 underline p-1"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 duration-200 mx-auto text-lg px-5 py-1 border-2 rounded-3xl text-white my-1"
                  >
                    SignUp
                  </button>

                  <p className="text-gray-500 text-center m-4">
                    Already Registered?{" "}
                    <button
                      onClick={controlFormToggle}
                      type="button"
                      className="text-blue-500 hover:text-blue-700 underline p-1"
                    >
                      LogIn
                    </button>
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      {isOpen && <EmailVerification isOpen={isOpen} onClose={toggleModal} />}
    </div>
  );
}

export default signin;
