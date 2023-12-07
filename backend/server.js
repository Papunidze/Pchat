const app = require("./index");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");

    const rooms = Object.keys(socket.rooms);

    rooms.forEach((room) => {
      socket.emit("leave", room);
      socket.leave(room);
      console.log(`User left room: ${room}`);
    });
  });

  socket.on("sendMessage", ({ room, message }) => {
    console.log(room);
    io.to(room).emit("message", message);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`);
});
