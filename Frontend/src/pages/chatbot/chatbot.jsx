import React from 'react'
import logo from "../../assets/logo.png";


export default function chatbot() {
  return (
    <div style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Open Sans', sans-serif",
    }}>
        <div className='body' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(#bb4d00 0%, ##bb4d00 130px, #d9dbd5 130px, #d9dbd5 100px)',
    }}>
      <div className="container" style={{
        position: 'relative',
        width: '1600px',
        maxWidth: '100%',
        height: 'calc(100vh - 40px)',
        background: '#cecaca',
        boxShadow: '0 1px 1px 0 rgb(0, 0, 0, 0.06), 0 2px 5px 0 rgb(0, 0, 0, 0.06)',
        display: 'flex',
    }}>
        <div className="leftside" style={{
             position: 'relative',
             flex: '20%',
             background: '#faf9f7',
             borderRight: '1px solid #000',
        }}>
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
                    <div className="userimg" style={{
                        position: 'relative',
                        width: '40px',
                        height: '40px',
                        overflow: 'hidden',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}>
                        <img src={logo} className="cover" style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }} alt="User1" />
                    </div>
                    <div className="headtext">
                        <h5><b>New Chat</b></h5>
                    </div>
                    <ul className='Nav_icons' style={{display: 'flex',}}>
                        <li style={{
                            display: 'flex',
                            listStyle: 'none',
                            cursor: 'pointer',
                            color: '#51585c',
                            fontSize: '1.5em',
                            marginLeft: '15px',
                            paddingTop: '17px',
                        }}><ion-icon name="create-outline"></ion-icon></li>
                    </ul>

            </div>
        </div>
        <div className="rightside" style={{
            position: 'relative',
            flex: '80%',
            background: '#FFF',
            borderRight: '1px solid rgba(0, 0, 0, 0.2)',
        }}>
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
                        <h5><b>CultureConnect Chatbot</b></h5>
                    </div>
                    
                    <ul className='Nav_icons' style={{display: 'flex',}}>
                        <li style={{
                            display: 'flex',
                            listStyle: 'none',
                            cursor: 'pointer',
                            color: '#51585c',
                            fontSize: '1.5em',
                            marginLeft: '15px',
                            paddingTop: '17px',
                        }}><ion-icon name="share-outline"></ion-icon></li>
                    </ul>
                </div>

                <div className="chatBox" style={{
                    position: 'relative',
                    width: '100%',
                    height: 'calc(100% - 120px)',
                    padding: '50px',
                    overflowY: 'auto',
                }}>
                    
                </div>

                <div className="chatbox_input" style={{
                    position: 'relative',
                    width: '100%',
                    height: '60px',
                    background: '#cecaca',
                    padding: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #000000',
                }}>
                    <input style={{
                        position: 'relative',
                        width: '95%',
                        margin: '0 170px',
                        padding: '7px 20px',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        outline: 'none',
                        borderRadius: '30px',
                        fontSize: '1em',
                    }} type="text" placeholder='Type a message'/>
                    <ion-icon name="send-outline" style={{
                          cursor: 'pointer',
                          fontSize: '1.8em',
                          color: '#51585c',
                    }}></ion-icon>

                </div>
            </div>
      </div>
    </div>
    </div>
    
  )
}


