import "../userprofile/userprofile.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import logo from "../../assets/logo.png";
import pic2 from "../../assets/profileIcon.png";

export default function UserFeed() {
  const [profileImage, setProfileImage] = useState(pic2);
  const navigate = useNavigate();
  const [mappedMedia, setMappedMedia] = useState([]);
  const [reportOptionVisible, setReportOptionVisible] = useState({});

  const navigateToHomepage = () => {
    navigate("/user/Homepage");
  };

  const navigateToUserProfile = () => {
    navigate("/user/userprofile");
  };

  useEffect(() => {
    async function getInfo() {
      try {
        const id = JSON.parse(localStorage.getItem("user")).id;
        const response = await axios.get("/user/allsocialmediaposts", {
          params: { id: id },
        });

        const users = response.data.Userphoto;
        const combinedMedia = response.data.combinedMedia;

        const mappedMedia = combinedMedia.map((media) => {
          const user = users.find((user) => user.UserID === media.UserID);
          return { ...media, UserPhoto: user };
        });

        setMappedMedia(mappedMedia);

        console.log(response);
        console.log(mappedMedia);
        if (response.data.Userphoto[0].Profile_pic) {
          setProfileImage(
            `http://127.0.0.1:5000/${response.data.Userphoto[0].Profile_pic}`
          );
        } else {
          // Set the default profile image when Profile_pic is null
          setProfileImage(pic2);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getInfo();
  }, []);

  const navigateToOtherUserProfile = (userID) => {
    navigate("/OtherUserProfile", { state: { UserID: userID } });

    console.log("userid----------", userID);
  };

  const toggleReportOption = (postId) => {
    setReportOptionVisible((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleReportClick = (post) => {
    const postId = post.VideoID ? post.VideoID : post.ImageID;
    const postType = post.VideoID ? 'video' : 'image';
    navigate('/user/Feedback', { state: { postId, postType } });
  };

  return (
    <div className="body3">
      <main>
        <header>
          <div className="tb">
            <div className="td" id="logo">
              <a
                className="navbar-brand px-lg-5 px-sm-2 d-flex align-items-center"
                href="#"
              >
                <img style={{ width: 40 }} src={logo} alt="" />
              </a>
            </div>
            <div className="td" id="search-form">
              <form method="get" action="#">
                <input type="text" placeholder="Search CultureConnect" />
                <button type="submit">
                  <i className="material-icons">
                    <ion-icon name="search-outline"></ion-icon>
                  </i>
                </button>
              </form>
            </div>
            <div className="td" id="f-name-l">
              <span>CultureConnect</span>
            </div>
            <div className="td" id="i-links">
              <div className="tb">
                <div className="td" id="m-td">
                  <div className="tb">
                    <span className="td" onClick={navigateToHomepage}>
                      <i className="material-icons">
                        <ion-icon name="home-outline"></ion-icon>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="td">
                  <a href="#" id="p-link" onClick={navigateToUserProfile}>
                    <img src={profileImage} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="main-content">
          <div className="tb">
            <div className="td" id="l-col"></div>
            <div className="td" id="m-col">
              <div className="m-mrg" id="p-tabs">
                <div className="tb">
                  <div className="td">
                    <div className="tb" id="p-tabs-m">
                      <div className="td active">
                        <i className="material-icons">
                          <ion-icon name="albums-outline"></ion-icon>
                        </i>
                        <span>Friends</span>
                      </div>
                      <div className="td" onClick={navigateToUserProfile}>
                        <i className="material-icons">
                          <ion-icon name="person-circle-outline"></ion-icon>
                        </i>
                        <span>My Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {mappedMedia.map((post, index) => (
                  <div key={post.id} className="post">
                    <div className="tb">
                      <a
                        href="#"
                        className="td p-p-pic"
                        onClick={() => navigateToOtherUserProfile(post.UserID)}
                      >
                        <img
                          src={
                            post.UserPhoto.Profile_pic
                              ? `http://127.0.0.1:5000/${post.UserPhoto.Profile_pic}`
                              : pic2
                          }
                          alt={`${post.UserPhoto.Name}'s profile pic`}
                        />
                      </a>
                      <div className="td p-r-hdr">
                        <div className="p-u-info">
                          <p>{post.img_caption || post.Captions}</p>
                          <a href="#">{post.UserPhoto.Name}</a>
                        </div>
                        <div className="p-dt">
                          <i className="material-icons">
                            <ion-icon name="calendar-outline"></ion-icon>
                          </i>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      {/* Three-dotted button */}
                      <div className="td p-menu">
                        <button
                          className="p-menu-btn"
                          onClick={() => toggleReportOption(post.id)}
                        >
                          <i className="material-icons">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                          </i>
                        </button>
                        {reportOptionVisible[post.id] && (
                          <div className="p-report-toggle">
                            <button onClick={() => handleReportClick(post)}>Report</button>
                          </div>
                        )}
                      </div>
                    </div>
                    <a href="#" className="p-cnt-v">
                      {post.picture && (
                        <img
                          src={`http://127.0.0.1:5000/${post.picture}`}
                          alt="Post"
                        />
                      )}
                      {post.Video && (
                        <video
                          controls
                          src={`http://127.0.0.1:5000/${post.Video}`}
                        />
                      )}
                    </a>
                    <div>
                      <div className="p-acts">
                        <div className="p-act like">
                          <i
                            className="material-icons"
                            style={{ fontSize: 22 }}
                          >
                            <ion-icon name="heart"></ion-icon>
                          </i>
                          <span>25</span>
                        </div>
                        <div className="p-act comment">
                          <i
                            className="material-icons"
                            style={{ fontSize: 22 }}
                          >
                            <ion-icon name="chatbox"></ion-icon>
                          </i>
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div id="loading">
                <i class="material-icons" style={{ fontSize: 30 }}>
                  <ion-icon name="refresh-circle-outline"></ion-icon>
                </i>
              </div>
            </div>
            <div className="td" id="r-col"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
