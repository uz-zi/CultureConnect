import React, { useState } from 'react';
import '../userprofile/userprofile.css'


import logo from "../../assets/logo.png";
import pic1 from "../../assets/fade5.jpg";
import pic6 from '../../assets/img5.jpg';
import pic5 from '../../assets/img3.jpg';
import pic2 from '../../assets/user.jpg';


export default function userprofile() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


  return (
    <div classNameName="body3">
        <main>
            <header>
                <div className="tb">
                <div className="td" id="logo">
                <a className="navbar-brand px-lg-5 px-sm-2 d-flex align-items-center" href="#">
                    <img style={{ width: 40 }} src={logo} alt="" />
                </a>
                </div>
                <div className="td" id="search-form">
                    <form method="get" action="#">
                    <input type="text" placeholder="Search CultureConnect"/>
                    <button type="submit"><i className="material-icons"><ion-icon name="search-outline"></ion-icon></i></button>
                    </form>
                </div>
                <div className="td" id="f-name-l"><span>CultureConnect</span></div>
                <div className="td" id="i-links">
                    <div className="tb">
                    <div className="td" id="m-td">
                        <div className="tb">
                        <span className="td"><i className="material-icons"><ion-icon name="home-outline"></ion-icon></i></span>
                        <span className="td"><i className="material-icons"><ion-icon name="person-circle-outline"></ion-icon></i></span>
                        </div>
                    </div>
                    <div className="td">
                        <a href="#" id="p-link">
                            <img src={pic2}/>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            <div id="profile-upper">
                <div id="profile-banner-image">
                    <img src={pic1} alt="Banner image"/>
                </div>
                <div id="profile-d">
                <div id="profile-pic">
                    <img src={pic2} className="cover3" alt="User" />
                </div>
                <div id="u-name">CultureConnect</div>
                    <div className="tb" id="m-btns">
                        <div className="td">
                            <div className="m-btn bg-primary" style={{marginTop: '3px'}}>
                                <i style={{fontSize: 22}}>
                                    <ion-icon name="create-outline"></ion-icon>
                                </i>
                                <span>
                                    Edit Profile
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="black-grd"></div>
            </div>
            <div id="main-content">
                <div className="tb">
                    <div className="td" id="l-col">
                    </div>
                <div className="td" id="m-col">
                    <div className="m-mrg" id="p-tabs">
                        <div className="tb">
                            <div className="td">
                                <div className="tb" id="p-tabs-m">
                                    <div className="td active"><i className="material-icons"><ion-icon name="albums-outline"></ion-icon></i><span>TIMELINE</span></div>
                                    <div className="td"><i className="material-icons"><ion-icon name="people-outline"></ion-icon></i><span>FRIENDS</span></div>
                                    <div className="td"><i className="material-icons"><ion-icon name="images-outline"></ion-icon></i><span>PHOTOS</span></div>
                                    <div className="td"><i className="material-icons"><ion-icon name="person-outline"></ion-icon></i><span>ABOUT</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-mrg" id="composer">
                        <div id="c-tabs-cvr">
                            <div className="tb" id="c-tabs">
                            <div className="td active"><i className="material-icons"><ion-icon name="menu-outline"></ion-icon></i><span>Make Post</span></div>
                            <div className="td"><i className="material-icons"><ion-icon name="camera-outline"></ion-icon></i><span>Photo</span></div>
                            <div className="td"><i className="material-icons"><ion-icon name="videocam-outline"></ion-icon></i><span>Video</span></div>
                            <div className="td"><i className="material-icons"><ion-icon name="calendar-outline"></ion-icon></i><span>Life Event</span></div>
                        </div>
                    </div>
                    <div id="c-c-main">
                        <div className="tb">
                            <div className="td" id="p-c-i"><img src={pic2} alt="Profile pic"/></div>
                            <div className="td" id="c-inp">
                                <input type="text" placeholder="What's on your mind?"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <form method="post" action="/upload" enctype="multipart/form-data">
                    <div className="post">
                        <div className="tb">
                        <a href="#" className="td p-p-pic"><img src={pic2} alt="Rajeev's profile pic"/></a>
                        <div className="td p-r-hdr">
                            <div className="p-u-info">
                            <a href="#">CultureConnect</a> shared a memory with <a href="#">Muhammad Ahmad</a>
                            </div>
                            <div className="p-dt">
                            <i className="material-icons"><ion-icon name="calendar-outline"></ion-icon></i>
                            <span>December 4, 2023</span>
                            </div>
                    </div>
                    <div>
                        <button
                            className="btn btn-primary dropdown-toggle my-2"
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                border: '1px solid blue',
                                padding: '1px 2px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                outline: 'none',
                             
                            }}
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <ion-icon style={{fontSize: '15px'}} name="ellipsis-vertical"></ion-icon>
                        </button>
                        {dropdownOpen && (
                            <ul style={{
                                listStyle: 'none',
                                backgroundColor: '#f9f9f9',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginTop: '2px',
                                padding: '4px 0',
                            }}>
                                <li style={{
                            display: 'block',
                            color: '#333',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                                    <a href="#"><h5 style={{fontSize: '10px'}}>Update Post</h5></a>
                                </li>
                                <li style={{
                            display: 'block',
                            color: '#333',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}>
                                    <a href="#"><h5 style={{fontSize: '10px'}}>Delete Post</h5></a>
                                </li>
                            </ul>
                        )}
                    </div>
                        </div>
                        <a href="#" className="p-cnt-v">
                        <img src={pic2}/>
                        </a>
                        <div>
                        <div className="p-acts">
                            <div className="p-act like"><i className="material-icons" style={{fontSize: 22}}><ion-icon name="heart"></ion-icon></i><span>25</span></div>
                            <div className="p-act comment"><i className="material-icons" style={{fontSize: 22}}><ion-icon name="chatbox"></ion-icon></i><span>1</span></div>
            
                        </div>
                        </div>
                    </div>
                    </form>
                   
                    </div>
                    <div id="loading"><i class="material-icons" style={{fontSize: 30}}><ion-icon name="refresh-circle-outline"></ion-icon></i></div>
                </div>
                <div className="td" id="r-col">
                    
                </div>
                </div>
            </div>

        </main>
    </div>
    
  )
}