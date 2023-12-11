import React, { useState } from "react";
import axios from './../axios'
import { useNavigate, Link } from "react-router-dom";
import EmailVerification from "./EmailVerification";
import useModal from "../Hooks/useModal";
import pic13 from "../assets/light11.jpg"

function signin() {
  const navigate = useNavigate();

  const [isOpen, toggleModal] = useModal();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  const controlFormToggle = () => {
    setIsLoginForm(!isLoginForm);
    setEmail("");
    setFirstname("");
    setPassword("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const phoneRegex = /^03\d{9}$/;
    if (phoneRegex.test(value) || value === "") {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
    setPhone(value);
  };

  const handleSignup = async () => {
    // Validate email format (Gmail address)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid Gmail address (e.g., example@gmail.com).');
      return; // Do not proceed with signup
    }

    // Password must have at least 6 characters, 1 alphabetic, 1 special character, and 1 numeric
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert('Please enter a valid password with at least 6 characters, including 1 alphabetic, 1 special character, and 1 numeric.');
      return; // Do not proceed with signup
    }

    try {
      const response = await axios.post('/user/signUpUser',
        {
          name: name,
          fname: firstname,
          lname: lastname,
          email: email,
          pnum: phone,
          pass: password
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
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/user/signIn', {
        email: email,
        pass: password
      });

      console.log(response);

      if (response.status === 200) {
        const userInfo = {
          token: response.data.accessToken,
          id: response.data.user_ID.id,
          roles: response.data.roles
        }
        localStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/user/userprofile');
      }
      else if (response.status === 401) {
        alert('Invalid Credentials!');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid Credentials!');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      if (email && password)
        handleLogin();
    } else {
      if (lastname && name && firstname && email && password)
        handleSignup();
    }
  };

  const clearTextBox = () => {
    setEmail('');
    setFirstname('');
    setLastname('');
    setName('');
    setPassword('');
    setPhone('');
  }

  return (
    <div className="flex overflow-hidden relative min-h-screen">
      <div
        id="SC"
        className={`flex-1 bg-gray-200 justify-center items-center duration-700 hidden md:flex transition-all ease-in-out ${
          isLoginForm ? "right-0" : "left-0"
        } ${isLoginForm ? "translte-x-0" : ""}`}
        style={{
          backgroundImage: `url(${pic13})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold" style={{ color: '#fff', textShadow: '16px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000', fontSize: '42px' }}>Welcome to cultureConnect!</h1>
          <p className="text-gray-500 text-lg mt-4" style={{ color: '#fff', textShadow: '16px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            scelerisque elit ac purus varius ullamcorper.
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

          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              {isLoginForm ? (
                <>
                  <div className="flex flex-col m-3">
                    <label htmlFor="email">Email</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${isEmailValid ? "" : "border-red-500"}`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailValid(true); // Reset the email validation status
                      }}
                    />
                    {!isEmailValid && (
                      <div style={{ color: "#FF0000" }}>
                        Please enter a valid Gmail address (e.g., example@gmail.com).
                      </div>
                    )}
                    <label htmlFor="pass">Password</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${isPasswordValid ? "" : "border-red-500"}`}
                      placeholder="Password"
                      type="password"
                      name="pass"
                      id="pass"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordValid(true); // Reset the password validation status
                      }}
                    />
                    {!isPasswordValid && (
                      <div style={{ color: "#FF0000" }}>
                        Please enter a valid password with at least 6 characters, including 1 alphabetic, 1 special character, and 1 numeric.
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
                      onChange={(e) => setFirstname(e.target.value)}
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="Last Name"
                      type="text"
                      name="lastname"
                      id="lastname"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />

                    <label htmlFor="name">NickName</label>
                    <input
                      className="px-2 py-1 m-1 outline-none rounded-md"
                      placeholder="Nickname"
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

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
                    {phoneError && <div style={{ color: "#22C55E" }}>Enter number in format 03XXXXXXXXX.</div>}

                    <label htmlFor="">Email</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${isEmailValid ? "" : "border-red-500"}`}
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailValid(true); // Reset the email validation status
                      }}
                    />
                    {!isEmailValid && (
                      <div style={{ color: "#FF0000" }}>
                        Please enter a valid Gmail address (e.g., example@gmail.com).
                      </div>
                    )}
                    <label htmlFor="">Password</label>
                    <input
                      className={`px-2 py-1 m-1 outline-none rounded-md ${isPasswordValid ? "" : "border-red-500"}`}
                      placeholder="Password"
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordValid(true); // Reset the password validation status
                      }}
                    />
                    {!isPasswordValid && (
                      <div style={{ color: "#FF0000" }}>
                        Please enter a valid password with at least 6 characters, including 1 alphabetic, 1 special character, and 1 numeric.
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
                    disabled={!phone.match(/^03\d{9}$/) || !isEmailValid || !isPasswordValid}
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
