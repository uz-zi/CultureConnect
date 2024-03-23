import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure useNavigate is imported
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import pic2 from "../../assets/profileIcon.png";
import axios from "../../axios"; // Ensure axios is correctly set up in the project

export default function ServicePage() {
  const [natives, setNatives] = useState([]); // State to store native profiles
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Function to fetch native profiles
    const fetchNatives = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/native/all_native_profile_for_service"
        );
        setNatives(response.data); // Directly use response.data
      } catch (error) {
        console.error("Failed to fetch native profiles:", error);
      }
    };

    fetchNatives();
  }, []);

  return (
    <div style={{ backgroundColor: "#FEFBEA" }}>
      <br />
      <h1
        className="mb-5 mb-xl-4 text-uppercase text-center my-5"
        style={{ backgroundColor: "#FEFBEA", fontSize: "38px" }}
      >
        {" "}
        Native Services{" "}
      </h1>
      <section
        className="py-3 py-md-5 py-xl-8"
        style={{ backgroundColor: "#FEFBEA" }}
      >
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6"></div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0 gx-xxl-5">
            {natives.map((native) => (
              <div className="col-12 col-md-6 col-lg-4" key={native.UserID}>
                <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={
                          native.Profile_pic
                            ? `http://127.0.0.1:5000/${native.Profile_pic.replace(
                                "\\",
                                "/"
                              )}`
                            : pic2
                        } // Adjust the path if necessary and ensure correct URL formation
                        alt={native.Name}
                      />
                      <figcaption className="m-0 p-4">
                        <h4 className="mb-1">{native.Name}</h4>
                        <p className="text-secondary mb-0">{native.service}</p>
                        <div className="text-center my-3">
                          <a
                            href="#!"
                            className="btn bsb-btn-2xl btn-primary "
                            style={{ fontSize: 20 }}
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/user/NativeProfile", {
                                state: { userId: native.UserID },
                              }); // Passing userID in state
                            }}
                          >
                            Read More
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
