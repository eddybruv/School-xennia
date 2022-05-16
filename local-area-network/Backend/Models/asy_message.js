const mongoose = require("mongoose");

const AsymMessage = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('asymMessage', AsymMessage)
