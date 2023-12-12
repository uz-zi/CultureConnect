import React from "react";
import "../userprofile/userprofile.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import pic2 from "../../assets/user.jpg";
import pic6 from "../../assets/img5.jpg";
import pic7 from "../../assets/img6.jpg";
import pic9 from "../../assets/img8.jpg";

export default function UserFeed() {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/user/Homepage");
  };

  const navigateToUserProfile = () => {
    navigate("/user/userprofile");
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
                    <img src={pic2} />
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
                        <span>TIMELINE</span>
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
              <div className="m-mrg" id="composer">
                <div id="c-tabs-cvr">
                  <div className="tb" id="c-tabs">
                    <div className="td active">
                      <i className="material-icons">
                        <ion-icon name="menu-outline"></ion-icon>
                      </i>
                      <span>Make Post</span>
                    </div>
                    <div className="td">
                      <i className="material-icons">
                        <ion-icon name="camera-outline"></ion-icon>
                      </i>
                      <span>Photo</span>
                    </div>
                    <div className="td">
                      <i className="material-icons">
                        <ion-icon name="videocam-outline"></ion-icon>
                      </i>
                      <span>Video</span>
                    </div>
                    <div className="td">
                      <i className="material-icons">
                        <ion-icon name="calendar-outline"></ion-icon>
                      </i>
                      <span>Life Event</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="post">
                  <div className="tb">
                    <a href="#" className="td p-p-pic">
                      <img src={pic6} alt="Rajeev's profile pic" />
                    </a>
                    <div className="td p-r-hdr">
                      <div className="p-u-info">
                        <a href="#">CultureConnect</a> shared a memory with{" "}
                        <a href="#">Muhammad Ahmad</a>
                      </div>
                      <div className="p-dt">
                        <i className="material-icons">
                          <ion-icon name="calendar-outline"></ion-icon>
                        </i>
                        <span>December 4, 2023</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="p-cnt-v">
                    <img src={pic9} />
                  </a>
                  <div>
                    <div className="p-acts">
                      <div className="p-act like">
                        <i className="material-icons" style={{ fontSize: 22 }}>
                          <ion-icon name="heart"></ion-icon>
                        </i>
                        <span>25</span>
                      </div>
                      <div className="p-act comment">
                        <i className="material-icons" style={{ fontSize: 22 }}>
                          <ion-icon name="chatbox"></ion-icon>
                        </i>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <div className="post">
                  <div className="tb">
                    <a href="#" className="td p-p-pic">
                      <img src={pic6} alt="Rajeev's profile pic" />
                    </a>
                    <div className="td p-r-hdr">
                      <div className="p-u-info">
                        <a href="#">CultureConnect</a> shared a memory with{" "}
                        <a href="#">Muhammad Ahmad</a>
                      </div>
                      <div className="p-dt">
                        <i className="material-icons">
                          <ion-icon name="calendar-outline"></ion-icon>
                        </i>
                        <span>December 4, 2023</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="p-cnt-v">
                    <img src={pic7} />
                  </a>
                  <div>
                    <div className="p-acts">
                      <div className="p-act like">
                        <i className="material-icons" style={{ fontSize: 22 }}>
                          <ion-icon name="heart"></ion-icon>
                        </i>
                        <span>25</span>
                      </div>
                      <div className="p-act comment">
                        <i className="material-icons" style={{ fontSize: 22 }}>
                          <ion-icon name="chatbox"></ion-icon>
                        </i>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
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

