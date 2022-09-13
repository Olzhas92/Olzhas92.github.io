const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const cors = require("cors");

app.use(cors);

const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`New user connected: ${socket.id}`);

  socket.on("join_room", (room) => {
    socket.join(room);
  });

  socket.on("send_message", (data) => {
    console.log(data.message);
    console.log(data.room);
    // socket.broadcast.emit("receive_message", data);
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(10000, () => {
  console.log("Server listens to port 10000");
});
