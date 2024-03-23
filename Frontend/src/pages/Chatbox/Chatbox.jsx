import "../Chatbox/Chatbox.css";
import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { useLocation } from "react-router-dom";
import defaultProfilePic from "../../assets/profileIcon.png";

export default function Chatbox() {
  const location = useLocation();
  const [users, setUser] = useState([]);
  const baseURL = "http://127.0.0.1:5000/";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const senderId = JSON.parse(localStorage.getItem("user"))?.id;
        if (!senderId) {
          console.error("Sender ID not found in local storage");
          return;
        }
        const response = await axios.get("/user/chatbox", {
          params: {
            sender_id: senderId,
          },
        });

        console.log(response.data.users);
        // Ensure response.data.Userphoto is an array
        const userPhotos = Array.isArray(response.data.Userphoto)
          ? response.data.Userphoto
          : [response.data.Userphoto];
        setUser(response.data.users);

        console.log("Fetched user data:", response.data.Userphoto);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [location.state?.userId]);

  // useEffect(() => {

  //     const socket = io("http://127.0.0.1:8000/user");

  //     socket.on("connectionEstablished", (data) => {
  //     });

  //     return () => socket.disconnect();
  //   }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="body">
          <div
            className="container"
            style={{
              position: "relative",
              width: "1396px",
              maxWidth: "100%",
              height: "calc(100vh - 40px)",
              background: "#cecaca",
              boxShadow:
                "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06)",
              display: "flex",
            }}
          >
            <div className="leftside">
              <div className="search_chat">
                <div>
                  <input type="text" placeholder="Search or start a new chat" />
                  <ion-icon name="search-outline"></ion-icon>
                </div>
              </div>
              <div className="chatlist">
                <div className="block active">
                  <div className="imgbx">
                    <img
                      src={
                        user?.Profile_pic
                          ? `${baseURL}${user.Profile_pic}`
                          : defaultProfilePic
                      }
                      className="cover"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="User"
                    />
                  </div>
                  <div className="details">
                    <div className="listhead">
                      <h6>
                        {user?.Name}
                        <br />
                      </h6>
                      <p className="time">10:56</p>
                    </div>
                    <div className="message_p">
                      <p>How are you?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rightside">
              <div
                className="header"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "60px",
                  background: "#cecaca",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 15px",
                }}
              >
                <div className="imgtext">
                  <div className="userimg">
                    <img
                      src={
                        user?.Profile_pic
                          ? `${baseURL}${user.Profile_pic}`
                          : defaultProfilePic
                      }
                      className="cover"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="User1"
                    />
                  </div>
                  <h6>
                    {user?.Name}
                    <br />
                  </h6>
                </div>

                <ul className="Nav_icons">
                  <li>
                    <ion-icon name="search-outline"></ion-icon>
                  </li>
                  <li>
                    <ion-icon name="ellipsis-vertical"></ion-icon>
                  </li>
                </ul>
              </div>

              <div className="chatBox">
                <div className="message my_message">
                  <p>
                    Hi <span>12:15</span>
                  </p>
                </div>
                <div className="message frnd_message">
                  <p>
                    Hello <span>12:16</span>
                  </p>
                </div>
              </div>

              <div className="chatbox_input">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Type a message" />
                <ion-icon name="mic"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
