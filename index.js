const express = require("express");
const app = express();
const port = 3000;

const roomList = [
  {
    roomNumber: "1",
    roomType: "Deluxe Room",
    amenities: "Air conditioner, free wifi, tv, bathroom, kitchen",
    price: 500,
    photos: "image1",
    checkinTime: new Date("11-Nov-2021"),
    checkoutTime: new Date("12-Nov-2021"),
    rating: 4.5,
  },
  {
    roomNumber: "2",
    roomType: "Deluxe Room",
    amenities: "Air conditioner, free wifi, tv, bathroom, kitchen",
    price: 1000,
    photos: "image2",
    checkinTime: new Date("11-Nov-2021"),
    checkoutTime: new Date("12-Nov-2021"),
    rating: 3.4,
  },
  {
    roomNumber: "3",
    roomType: "Private Suite",
    amenities: "Air conditioner, free wifi, tv, bathroom, kitchen",
    price: 15000,
    photos: "image3",
    checkinTime: new Date("11-Nov-2021"),
    checkoutTime: new Date("12-Nov-2021"),
    rating: 2.6,
  },
];

app.get("/api/Rooms", (req, res) => {
  res.json(roomList);
});

app.use(express.json());

app.post("/api/Rooms", (req, res) => {
  roomList.push(req.body);
  res.json(roomList);
});

// id

app.put("/api/Rooms/:id", (req, res) => {
  roomList[req.params.id - 1] = req.body;
  res.json(roomList);
});

app.delete("/api/Rooms/:id", (req, res) => {
  roomList.splice(req.params.id - 1, 1);
  console.log(roomList);
  res.json(roomList);
});

app.get("/api/Rooms/:id", (req, res) => {
  res.json(roomList[req.params.id - 1]);
});

app.patch("/api/Rooms/:id", (req, res) => {
  res.send("patch /api/Rooms/" + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
