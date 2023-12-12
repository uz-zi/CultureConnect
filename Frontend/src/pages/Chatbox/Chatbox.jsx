import React from 'react'
import '../Chatbox/Chatbox.css'
import pic1 from '../../assets/pattern.png'
import pic2 from '../../assets/user.jpg'
import pic3 from '../../assets/img1.jpg'
import pic4 from '../../assets/img2.jpg'
import pic5 from '../../assets/img3.jpg'
import pic6 from '../../assets/img5.jpg'
import pic7 from '../../assets/img6.jpg'
import pic8 from '../../assets/img7.jpg'
import pic9 from '../../assets/img8.jpg'
import pic10 from '../../assets/img9.jpg'


export default function Chatbox() {
  return (
    <div className='body'>
        <div className="container" style={{
            position: 'relative',
            width: '1396px', 
            maxWidth: '100%',
            height: 'calc(100vh - 40px)',
            background: '#cecaca',
            boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06)',
            display: 'flex',
        }}>
            
            <div className="leftside">
                <div className="header" style={{
                      position: 'relative',
                      width: '100%',
                      height: '60px',
                      background: '#cecaca',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0 15px',
                }}>
                    <div className="userimg">
                    <img src={pic2} className="cover" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}  alt="User1" />
                    </div>
                    <ul className='Nav_icons'>
                        <li><ion-icon name="chatbox"></ion-icon></li>
                        <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                    </ul>
                </div>

                <div className="search_chat">
                    <div>
                        <input type="text" placeholder="Search or start a new chat"/>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                </div>
                <div className="chatlist">
                    <div className="block active">
                        <div className="imgbx">
                            <img src={pic6} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Umair</h6>
                                <p className="time">10:56</p>
                            </div>
                            <div className="message_p">
                                <p>How are you?</p>
                            </div>
                        </div>
                    </div>

                    <div className="block unread">
                        <div className="imgbx">
                            <img src={pic9} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Saad Shafique</h6>
                                <p className="time">9:14</p>
                            </div>
                            <div className="message_p">
                                <p>Hi, what are the today's tasks?</p>
                                <b>1</b>
                            </div>
                        </div>
                    </div>

                    <div className="block unread">
                        <div className="imgbx">
                            <img src={pic6} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Ali</h6>
                                <p className="time">12:14</p>
                            </div>
                            <div className="message_p">
                                <p>Today I am going to see the Beach.</p>
                                <b>6</b>
                            </div>
                        </div>
                    </div>

                    <div className="block unread">
                        <div className="imgbx">
                            <img src={pic5} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Michale</h6>
                                <p className="time">1:34</p>
                            </div>
                            <div className="message_p">
                                <p>Are you developer?</p>
                                <b>9</b>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="imgbx">
                            <img src={pic7} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Usman</h6>
                                <p className="time">1:34</p>
                            </div>
                            <div className="message_p">
                                <p>Are you developer?</p>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="imgbx">
                            <img src={pic8} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Charlit</h6>
                                <p className="time">1:34</p>
                            </div>
                            <div className="message_p">
                                <p>Are you developer?</p>
                            </div>
                        </div>
                    </div>

                    <div className="block unread">
                        <div className="imgbx">
                            <img src={pic9} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Sherazi</h6>
                                <p className="time">1:34</p>
                            </div>
                            <div className="message_p">
                                <p>Are you developer?</p>
                                <b>3</b>
                            </div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="imgbx">
                            <img src={pic10} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User" />
                        </div>
                        <div className="details">
                            <div className="listhead">
                                <h6>Saira</h6>
                                <p className="time">1:34</p>
                            </div>
                            <div className="message_p">
                                <p>Are you developer?</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rightside">
                <div className="header" style={{
                      position: 'relative',
                      width: '100%',
                      height: '60px',
                      background: '#cecaca',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0 15px',
                }}>
                    <div className="imgtext">
                        <div className="userimg">
                            <img src={pic6} className="cover" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }} alt="User1" />
                        </div>
                        <h6>Umair<br/><span>Online</span></h6>
                    </div>
                    
                    <ul className='Nav_icons'>
                        <li><ion-icon name="search-outline"></ion-icon></li>
                        <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                    </ul>
                </div>

                <div className="chatBox">
                    <div className="message my_message">
                        <p>Hi <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Hello <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>
                    <div className="message my_message">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quo eaque ea nostrum recusandae porro. <span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>Lorem ipsum dolor sit amet. <span>12:16</span></p>
                    </div>  <div className="message my_message">
                        <p>ok<span>12:15</span></p>
                    </div>
                    <div className="message frnd_message">
                        <p>bye<span>12:16</span></p>
                    </div>
                </div>

                <div className="chatbox_input">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder='Type a message'/>
                    <ion-icon name="mic"></ion-icon>

                </div>
            </div>
        </div>
      
    </div>
  )
}


