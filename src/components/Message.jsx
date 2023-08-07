import React from 'react';
import Pic from './../image/tcf pic.jpg';

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Pic} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Pic} alt="" />
      </div>
    </div>
  )
}

export default Message