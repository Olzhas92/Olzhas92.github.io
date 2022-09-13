import React, { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:10000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
