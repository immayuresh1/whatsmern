import React, { useEffect, useState } from "react";
import "./app.css";
import Chat from "./chat.js";
import Sidebar from "./sidebar.js";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("fa971e414d99955bfa8c", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      
      setMessages([...messages,newMessage])
    });

    return() =>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
