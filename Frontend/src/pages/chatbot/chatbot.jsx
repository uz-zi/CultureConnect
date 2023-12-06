import React from 'react'
import '../chatbot/chatbot.css'
import pic1 from '../../assets/pattern.png'
import logo from "../../assets/logo.png";
import pic2 from '../../assets/user.jpg'
import pic3 from '../../assets/img1.jpg'
import pic4 from '../../assets/img2.jpg'
import pic5 from '../../assets/img3.jpg'
import pic6 from '../../assets/img5.jpg'
import pic7 from '../../assets/img6.jpg'
import pic8 from '../../assets/img7.jpg'
import pic9 from '../../assets/img8.jpg'
import pic10 from '../../assets/img9.jpg'

export default function chatbot() {
  return (
    <div className='body1'>
      <div className="container1">
        <div className="leftside1">
            <div className="header1">
                    <div className="userimg1">
                        <img src={logo} className="cover1" alt="User1" />
                    </div>
                    <div className="headtext">
                        <h5><b>New Chat</b></h5>
                    </div>
                    <ul className='Nav_icons1'>
                        <li><ion-icon name="create-outline"></ion-icon></li>
                    </ul>

            </div>
        </div>
        <div className="rightside2">
                <div className="header2">
                    <div className="imgtext1">
                        <h5><b>CultureConnect Chatbot</b></h5>
                    </div>
                    
                    <ul className='Nav_icons1'>
                        <li><ion-icon name="share-outline"></ion-icon></li>
                    </ul>
                </div>

                <div className="chatBox1">
                    
                </div>

                <div className="chatbox_input1">
                    <input type="text" placeholder='Type a message'/>
                    <ion-icon name="send-outline"></ion-icon>

                </div>
            </div>
      </div>
    </div>
  )
}


