const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    publicKey: Number,
    privateKey: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema)