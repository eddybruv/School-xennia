const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    publicKey: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema)