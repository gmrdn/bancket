// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

var cards_in_store = [
  {
    id: 58764320,
    column: 1,
    title: "io Card 1",
    position: 1,
  },
  {
    id: 54329611,
    column: 1,
    title: "Card 2",
    position: 2,
  },
  {
    id: 54928715,
    column: 1,
    title: "Card 3",
    position: 3,
  },
  {
    id: 58813679,
    column: 1,
    title: "Bob",
    position: 4,
  },
  {
    id: 81637911,
    column: 1,
    title: "John",
    position: 5,
  },
  {
    id: 20981715,
    column: 1,
    title: "Paul",
    position: 6,
  },
  {
    id: 57698320,
    column: 1,
    title: "Yoko",
    position: 7,
  },
  {
    id: 56476789,
    column: 1,
    title: "Geoges",
    position: 8,
  },
  {
    id: 89098765,
    column: 1,
    title: "Ringo",
    position: 9,
  },
  {
    id: 53928750,
    column: 2,
    title: "Card 4",
    position: 1,
  },
  {
    id: 59238778,
    column: 4,
    title: "Card 5",
    position: 1,
  },
];

io.on("connect", (socket) => {
  // handle the event sent with socket.send()
  console.log(`connect received`);

  socket.on("update", (data) => {
    console.log(`update received`);
    cards_in_store = data;
    socket.broadcast.emit("update", cards_in_store);
  });
});

http.listen(5000, () => {
  console.log("listening on *:5000");
});
