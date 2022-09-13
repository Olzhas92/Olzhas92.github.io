import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:10000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [room, setRoom] = useState();

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setSentMessage(data.message);
    });
  }, []);

  const joinRoom = (event) => {
    event.preventDefault();
    socket.emit("join_room", room);
    // setRoom("");
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (room !== "") {
      socket.emit("send_message", {
        message,
        room,
      });
    }

    setMessage("");
  };

  return (
    <div>
      <div>
        <form onSubmit={joinRoom}>
          <input
            value={room}
            onChange={(event) => setRoom(event.target.value)}
            placeholder="Room"
          />
          <button type="submit">Join</button>
        </form>
      </div>
      <div>
        <form onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Sent message"
          />
          <button type="submit">Send</button>
        </form>
        <h2>Messages</h2>
        <div>
          <p>{sentMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
