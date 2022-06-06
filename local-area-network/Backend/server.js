const cipher = require("../src/cipher");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const MessageModel = require("./Models/message");
const UserModel = require("./Models/user");
const AsymMessageModel = require("./Models/asy_message");

const connection = mongoose.connect(
  "mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/LanProject?retryWrites=true&w=majority"
);
("");

connection.catch(() => console.log("Connection unsuccessful"));
connection.then(() => console.log("Connection successful"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/", async (req, res) => {
  const { name, message } = req.body;
  const newMessage = await new MessageModel({
    name: name,
    message: cipher.encrypt(message, 5),
  });
  newMessage.save();
  res.json({ message: "message sent", data: newMessage });
});

app.get("/", async (req, res) => {
  const messages = await MessageModel.find({});
  res.json(messages);
});

// asymmetric routes
app.post("/asymm/user", async (req, res) => {
  const { name, publicKey } = req.body;
  const userFound = await UserModel.find({ name });

  if (userFound.length > 0) {
    res.json({ message: "username taken" });
    return;
  }

  const newUser = await new UserModel({
    name: name,
    publicKey: publicKey,
  });
  newUser.save();

  res.json({ message: "user created", data: newUser });
});

app.post("/asymm/message", async (req, res) => {
  const { sender, receiver, message } = req.body;
  const newMessage = await new AsymMessageModel({
    sender,
    receiver,
    message,
  });
  newMessage.save();
  res.json({ message: "message sent", data: newMessage });
});

app.get("/asymm/message", async (req, res) => {
  const messages = await AsymMessageModel.find({});
  res.json(messages);
});

app.get("/asymm/get_user", async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
});

const PORT = 5000;

app.listen(PORT, console.log(`Running on port ${PORT}`));
