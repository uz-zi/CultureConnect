import React, { useEffect, useState } from "react";
import pic1 from "../../assets/grey.jpeg";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";


export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePic, setProfilePic] = useState(pic1);
  const [bannerPic, setBannerPic] = useState(pic1);
  const navigate = useNavigate();

  // Styles
  const formcontent = {
    display: "block",
    width: "100%",
    padding: "0.5rem 1rem",
    fontSize: "0.9375rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#29292e",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #e5dfe4",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    borderRadius: "5px",
  };

  const displaySelectedImage = (event, setImage) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  // Handlers for input change
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    async function getInfo() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
          const response = await axios.get(
            "/user/display_userdatafior_update",
            {
              params: { id: user.id },
            }
          );

          setFirstName(response.data.FirstName);
          setLastName(response.data.LastName);
          setNickName(response.data.Name);
          setPhoneNumber(response.data.PhoneNumber);

          if (response.data.Cover_photo) {
            console.log(response.data.Cover_photo);
            setBannerPic(`http://127.0.0.1:5000/${response.data.Cover_photo}`);
          }
          if (response.data.Profile_pic) {
            console.log(response.data.Profile_pic);
            setProfilePic(`http://127.0.0.1:5000/${response.data.Profile_pic}`);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    getInfo();
  }, []);

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("name", nickName);
      formData.append("fname", firstName);
      formData.append("lname", lastName);
      formData.append("pnum", phoneNumber);

      const profileImageElement = document.getElementById("customFile1");
      const coverImageElement = document.getElementById("customFile2");

      if (profileImageElement && profileImageElement.files[0]) {
        formData.append("profile_image", profileImageElement.files[0]);
      }

      if (coverImageElement && coverImageElement.files[0]) {
        formData.append("cover_image", coverImageElement.files[0]);
      }

      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.id) {
        formData.append("id", user.id);
      }

      const response = await axios.put("/user/upadte_userprofile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data === "Data updated successfully") {
        navigate('/user/userprofile');
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  const handleCancel = () => {
    navigate('/user/userprofile')
  }

  return (
    <div style={{ marginTop: "20px", color: "#9b9ca1" }}>
      <div className="container-fluid" style={{ backgroundColor: "#D3D3D3" }}>
        <div className="row">
          <div className="col-12">
            <div className="my-5 text-dark">
              <h3 style={{ fontSize: "38px" }}>My Profile</h3>
              <hr />
            </div>

            <form className="file-upload">
              <div className="row mb-5 gx-5">
                <div className="col-xxl-8 mb-5 mb-xxl-0">
                  <div
                    className="bg-secondary-soft px-4 py-5 rounded mx-5"
                    style={formcontent}
                  >
                    <div className="row g-3">
                      <h4
                        className="mb-4 mt-0 text-dark"
                        style={{ fontSize: "38px" }}
                      >
                        Contact detail
                      </h4>
                      <div className="col-md-12 text-dark">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          style={formcontent}
                          placeholder="Enter First Name"
                          aria-label="First name"
                          value={firstName}
                          onChange={handleFirstNameChange}
                        />
                      </div>
                      <div className="col-md-12 text-dark">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          style={formcontent}
                          placeholder="Enter Last Name"
                          aria-label="Last name"
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                      </div>
                      <div className="col-md-12 text-dark">
                        <label className="form-label">Nick Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          style={formcontent}
                          placeholder="Enter Nick Name"
                          aria-label="Nick name"
                          value={nickName}
                          onChange={handleNickNameChange}
                        />
                      </div>
                      <div className="col-md-12 text-dark">
                        <label className="form-label">Phone number *</label>
                        <input
                          type="text"
                          className="form-control"
                          style={formcontent}
                          placeholder="Enter Phone no."
                          aria-label="Phone number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4">
                  <h4
                    className="mb-4 mt-5 text-center text-dark"
                    style={{ fontSize: "38px" }}
                  >
                    Profile pic
                  </h4>
                  <div className="mb-4 d-flex justify-content-center">
                    <img
                      id="selectedImage1"
                      src={profilePic}
                      alt="Profile"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded">
                      <label
                        className="form-label text-white m-1"
                        htmlFor="customFile1"
                      >
                        Choose file
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile1"
                        onChange={(event) =>
                          displaySelectedImage(event, setProfilePic)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 mb-5 mb-xxl-0">
                  <h4
                    className="mb-4 mt-0 text-center text-dark"
                    style={{ fontSize: "38px" }}
                  >
                    Banner Picture
                  </h4>
                  <div className="mb-4 d-flex justify-content-center">
                    <img
                      id="selectedImage2"
                      src={bannerPic}
                      alt="Banner"
                      style={{ width: "1100px", height: "300px" }}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded">
                      <label
                        className="form-label text-white m-1"
                        htmlFor="customFile2"
                      >
                        Choose file
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile2"
                        onChange={(event) =>
                          displaySelectedImage(event, setBannerPic)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-1 d-md-flex justify-content-md-end text-center">
                <button
                  type="button"
                  className="btn btn-danger my-5 btn-lg"
                  style={{ backgroundColor: "red" }}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary my-5 btn-lg"
                  style={{ backgroundColor: "blue" }}
                  onClick={handleSubmission}
                >
                  Update profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
