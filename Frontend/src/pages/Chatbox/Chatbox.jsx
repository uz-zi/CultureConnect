import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import defaultProfilePic from "../../assets/profileIcon.png";
import "../Chatbox/Chatbox.css";

export default function Chatbox() {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const baseURL = "http://127.0.0.1:5000/";
  const senderId = JSON.parse(localStorage.getItem("user")).id;

  useEffect(() => {
    const newSocket = io(baseURL);
    setSocket(newSocket);

    newSocket.on('receive_message', (message) => {
      setMessages(prev => ({
        ...prev,
        [message.receiverId]: [...(prev[message.receiverId] || []), message],
        [message.senderId]: [...(prev[message.senderId] || []), message]
      }));
    });

    newSocket.emit('join_room', senderId);

    return () => newSocket.close();
  }, [baseURL, senderId]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/user/chatbox", { params: { sender_id: senderId } });
        if (response.data.users.length > 0) {
          setUsers(response.data.users);
          setActiveChat(response.data.users[0].UserID);  // Set the first user as active chat
          setMessages({
            ...messages,
            [response.data.users[0].UserID]: response.data.previousChats || []
          });
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    }

    fetchUsers();
  }, [senderId]);

  const handleSelectUser = (userId) => {
    setActiveChat(userId);
    if (!messages[userId]) {
      // Optionally fetch the chat history if not already loaded
      fetchChatHistory(userId);
    }
  };

  const fetchChatHistory = async (userId) => {
    try {
      const { data } = await axios.get(`${baseURL}user/chat_history/${userId}`, {
        params: { sender_id: senderId }
      });
      setMessages(prev => ({ ...prev, [userId]: data }));
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
    }
  };
  

  const handleSendMessage = () => {
    if (!currentMessage.trim() || !activeChat) return;
    const messageData = {
      senderId,
      receiverId: activeChat,
      message: currentMessage
    };
    socket.emit('send_message', messageData);
    setCurrentMessage("");
    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), messageData]
    }));
  };

  return (
    <div className="body">
      <div className="container" style={{
        position: "relative", width: "1396px", maxWidth: "100%", height: "calc(100vh - 40px)", background: "#cecaca",
        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06)", display: "flex"
      }}>
        <div className="leftside">
          <div className="search_chat">
            <div>
              <input type="text" placeholder="Search or start a new chat" />
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
          <div className="chatlist">
            {users.map(user => (
              <div key={user.UserID} className={`block ${activeChat === user.UserID ? "active" : ""}`} onClick={() => handleSelectUser(user.UserID)}>
                <div className="imgbx">
                  <img
                    src={user.Profile_pic ? `${baseURL}${user.Profile_pic}` : defaultProfilePic}
                    className="cover"
                    alt="User"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="details">
                  <div className="listhead">
                    <h6>{user.Name}</h6>
                    <p className="time">10:56</p>  
                  </div>
                  <div className="message_p">
                    <p>{messages[user.UserID]?.slice(-1)[0]?.message || "Start a conversation"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rightside">
          {activeChat && messages[activeChat] ? (
            <>
              <div className="header" style={{ position: "relative", width: "100%", height: "60px", background: "#cecaca", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 15px" }}>
                <div className="imgtext">
                  <div className="userimg">
                    <img
                      src={users.find(user => user.UserID === activeChat)?.Profile_pic || defaultProfilePic}
                      className="cover"
                      alt="User1"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <h6>{users.find(user => user.UserID === activeChat)?.Name}</h6>
                </div>

                <ul className="Nav_icons">
                  <li><ion-icon name="search-outline"></ion-icon></li>
                  <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                </ul>
              </div>

              <div className="chatBox">
                {messages[activeChat].map((msg, index) => (
                  <div key={index} className={`message ${msg.senderId === senderId ? "my_message" : "frnd_message"}`}>
                    <p>{msg.message} <span>{new Date(msg.createdAt).toLocaleTimeString()}</span></p>
                  </div>
                ))}
              </div>

              <div className="chatbox_input">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} placeholder="Type a message" />
                <ion-icon name="mic"></ion-icon>
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="header" style={{ position: "relative", width: "100%", height: "60px", background: "#cecaca", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 15px" }}>
              <p>No user selected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
