import React, { useEffect, useState, useContext } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {

  const [chats, setChats] = useState([]);

  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userchats", currentUser.uid), (doc) => {
        // console.log("Current data: ", doc.data());
        setChats(doc.data())
        // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u)=>{
    dispatch({ type: "CHANGE_USER", payload: u })
  }

  return (
    <div className='search'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src={ chat[1].userInfo.photoURL } alt="" />
        <div className="userChatInfor">
          <span>{ chat[1].userInfo.displayName }</span>
          <p>{ chat[1].lastMessage?.text }</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats