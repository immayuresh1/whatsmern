import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios"
import React  from "react";
import { useState } from "react";
import "./chat.css";


function Chat({ messages }) {

const [input, setInput] = useState("")


const sendMessage=(e)=>{
  e.preventDefault();

   axios.post("/messages/new",{
    message : input,
    name:"Demo person",
    timestamp: "Just now!",
    received: true
  })

  setInput("");

}

  return (
    <div className="chat">
      <div className="chat__header">
      <Avatar
        src="https://avatars.dicebear.com/api/human/djfhg.svg "

      />
        <div className="chat__headerInfo">
          <h3>Room className</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((messsage) => (
          <p
            className={`chat__message ${messsage.received && "chat_reciever" }`}
          >
            <span className="chat__name">{messsage.name}</span>
                {messsage.message} 
            <span className="chat__timestamp">{messsage.timestamp}</span>
          </p>
        ))}


{/*         
          <p className="chat__reciever chat__message">
          <p>uses ctrl backspace
          </p>
            <span className="chat__name">Mayuresh</span>
          </p> */}

        </div>
      



      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input}  onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
