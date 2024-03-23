import React, { useEffect, useState } from "react";
import axios from "../axios";
import defaultProfilePic from "../assets/profileIcon.png";
import profileicon from "../assets/male-user-24.png"
import chat from "../assets/chat-24.png"
import { useNavigate } from "react-router-dom";

export default function ALL_USERS_PROFILE() {
  const [users, setUsers] = useState([]);
  const [openedUserId, setOpenedUserId] = useState(null); // Track the opened user list
  const baseURL = "http://127.0.0.1:5000/";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const currentUserId = JSON.parse(localStorage.getItem("user")).id;
        const response = await axios.get("/user/allusers_in_plateform", {
          params: { excludeId: currentUserId },
        });
        setUsers(response.data);
        console.log("userdata", response.data);
      } catch (error) {
        console.error("Error fetching all users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddFriend = (userId) => {
    console.log(`Add friend for user ${userId}`);
  };

  const handleChatWithUser = async (UserID) => {
    const currentUserId = JSON.parse(localStorage.getItem("user")).id;

    try {
      await axios.get("/user/check_chat_box", {
        params: {
          sender_id: currentUserId,
          id: UserID,
        },
      });

      navigate("/user/chatbox", { state: { UserID: UserID } });
    } catch (error) {
      console.error("Error checking or creating chat:", error);
    }
  };

  
  const handleSeeProfile = (UserID) => {
    navigate("/OtherUserProfile", { state: { UserID: UserID } });
  };

  const toggleListVisibility = (UserID) => {
    setOpenedUserId(openedUserId === UserID ? null : UserID);
  };

  return (
    <>
      <div>
        {users.map((user) => (
          <>
            <div
              key={user.id}
              className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-gray-400 dark:border-gray-400 shadow-lg rounded-lg cursor-pointer"
              onClick={() => toggleListVisibility(user.id)}
            >
              <div className="relative w-full flex justify-center sm:justify-start sm:w-auto">
                <img
                  className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
                  src={
                    user.Profile_pic
                      ? `${baseURL}${user.Profile_pic}`
                      : defaultProfilePic
                  }
                  alt="Profile"
                />
                <span
                  className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white rounded-full ${
                    user.is_Online ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </div>

              <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                <p
                  className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
                  itemProp="author"
                >
                  {user.Name}
                </p>

                {openedUserId === user.id && (
                <div class="flex gap-4">
                  <a
                  >
                    <img
                      class="h-6 w-6 dark:text-gray-300 object-cover mt-3 mr-3 rounded-full"
                      onClick={() => handleSeeProfile(user.UserID)}
                      src={
                        profileicon
                      }
                      alt="Profile"
                    />
                  </a>

                  <a
      
                  >
                    <img
                      class="h-6 w-6 dark:text-gray-300 object-cover mt-3 mr-3 rounded-full"
                      onClick={() => handleChatWithUser(user.UserID)}
                      src={
                        chat
                      }
                      alt="chat"
                    />
                  </a>
                </div>
                )}
              </div>
            </div>
            
          </>
        ))}
      </div>
    </>
  );
}




// import React, { useEffect, useState } from "react";
// import axios from "../axios";
// import defaultProfilePic from "../assets/profileIcon.png";
// import { useNavigate } from "react-router-dom";

// export default function ALL_USERS_PROFILE() {
//   const [users, setUsers] = useState([]);
//   const [openedUserId, setOpenedUserId] = useState(null); // Track the opened user list
//   const baseURL = "http://127.0.0.1:5000/";
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const currentUserId = JSON.parse(localStorage.getItem("user")).id;
//         const response = await axios.get("/user/allusers_in_plateform", {
//           params: { excludeId: currentUserId },
//         });
//         setUsers(response.data);
//         console.log("userdata", response.data);
//       } catch (error) {
//         console.error("Error fetching all users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleAddFriend = (userId) => {
//     console.log(`Add friend for user ${userId}`);
//   };

//   const handleChatWithUser = async (userId) => {
//     const currentUserId = JSON.parse(localStorage.getItem("user")).id;

//     try {
//       await axios.get("/user/check_chat_box", {
//         params: {
//           sender_id: currentUserId,
//           id: userId,
//         },
//       });

//       navigate("/user/chatbox", { state: { userId: userId } });
//     } catch (error) {
//       console.error("Error checking or creating chat:", error);
//     }
//   };

//   const handleSeeProfile = (userId) => {
//     navigate("/OtherUserProfile", { state: { userId: userId } });
//   };

//   const toggleListVisibility = (userId) => {
//     setOpenedUserId(openedUserId === userId ? null : userId);
//   };

//   return (
//     <>
//       <div>
//         {users.map((user) => (
//           <>
//             <div
//               key={user.id}
//               className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-gray-400 dark:border-gray-400 shadow-lg rounded-lg cursor-pointer"
//               onClick={() => toggleListVisibility(user.id)}
//             >
//               <div className="relative w-full flex justify-center sm:justify-start sm:w-auto">
//                 <img
//                   className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
//                   src={
//                     user.Profile_pic
//                       ? `${baseURL}${user.Profile_pic}`
//                       : defaultProfilePic
//                   }
//                   alt="Profile"
//                 />
//                 <span
//                   className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-white rounded-full ${
//                     user.is_Online ? "bg-green-500" : "bg-red-500"
//                   }`}
//                 ></span>
//               </div>

//               <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
//                 <p
//                   className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
//                   itemProp="author"
//                 >
//                   {user.Name}
//                 </p>
//               </div>
//             </div>
//             {openedUserId === user.id && (
//               <div className="flex justify-center border rounded-lg mb-4">
//                 <ul className="text-gray-900">
//                   <button
//                     className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-left"
//                     onClick={() => handleAddFriend(user.id)}
//                   >
//                     add friend
//                   </button>
//                   <button
//                     className="px-6 py-2 border-b border-gray-200 w-full text-left"
//                     onClick={() => handleChatWithUser(user.id)}
//                   >
//                     chat with?
//                   </button>
//                   <button
//                     className="px-6 py-2 border-b border-gray-200 w-full text-left"
//                     onClick={() => handleSeeProfile(user.id)}
//                   >
//                     see profile
//                   </button>
//                 </ul>
//               </div>
//             )}
//           </>
//         ))}
//       </div>
//     </>
//   );
// }



// // {openedUserId === user.id && (
// //   <div className="flex justify-center border rounded-lg mb-4">
// //     <ul className="text-gray-900">
// //       <button
// //         className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-left"
// //         onClick={() => handleAddFriend(user.id)}
// //       >
// //         add friend
// //       </button>
// //       <button
// //         className="px-6 py-2 border-b border-gray-200 w-full text-left"
// //         onClick={() => handleChatWithUser(user.id)}
// //       >
// //         chat with?
// //       </button>
// //       <button
// //         className="px-6 py-2 border-b border-gray-200 w-full text-left"
// //         onClick={() => handleSeeProfile(user.id)}
// //       >
// //         see profile
// //       </button>
// //     </ul>
// //   </div>
// // )}