import React, { useState, useContext } from 'react';
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import {
    collection, 
    query, 
    where, 
    getDocs,
    getDoc,
    doc, 
    setDoc,
    updateDoc,
    serverTimestamp
  } from "firebase/firestore";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);
  // console.log(currentUser);

  const handleSearch = async () => {
    const q = query(collection(db, "users"),
              where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
    } catch(err){
      // setErr(err);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async ()=>{
    // check if group(chats in firestore) exists, if not create
    const combinedId = 
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if(!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        console.log(currentUser.uid);
        console.log(user.uid);

        // create user chats
        await updateDoc(doc(db, "userchats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userchats", user.uid),{
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });

      } else {
        console.log("Already exist so it skipped");
      }
    } catch (err) {}

    setUser(null);
    setUsername(" ")
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input 
        type='text' 
        placeholder='find a user' 
        onKeyDown={handleKey} 
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfor">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search