import React, { useEffect ,useState} from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./sidebarchat";
import db from "./firebase.js"

function Sidebar() {


const [rooms, setRooms] = useState([]);

useEffect(() => {
  
  db.collection("Rooms").onSnapshot((snapshot) =>
    setRooms(snapshot.docs.map((doc)=>({

      id:doc.id,
      data :doc.data(),
  }))))
  
}, []);




  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map(room=>(
          <SidebarChat key ={room.id} id = {room.id} name = {room.data.name}/>
        ))}
        <SidebarChat/>
       

      </div>
    </div> 
    
  );
}

export default Sidebar;
