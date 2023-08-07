import React from 'react'
import Pic from './../image/tcf pic.jpg'

const Chats = () => {
  return (
    <div className='search'>
      <div className="userChat">
        <img src={Pic} alt="" />
        <div className="userChatInfor">
          <span>TcF</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Pic} alt="" />
        <div className="userChatInfor">
          <span>TcF</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Pic} alt="" />
        <div className="userChatInfor">
          <span>TcF</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats