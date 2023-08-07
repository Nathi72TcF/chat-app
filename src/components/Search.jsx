import React from 'react'
import Pic from './../image/tcf pic.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src={Pic} alt="" />
        <div className="userChatInfor">
          <span>TcF</span>
        </div>
      </div>
    </div>
  )
}

export default Search