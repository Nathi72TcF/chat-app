import React from 'react'
import Pic from './../image/tcf pic.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>TcF Chat</span>
      <div className='user'>
        <img src={Pic} alt="" />
        <span>Nathi</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar