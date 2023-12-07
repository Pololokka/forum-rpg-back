const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  img: String,
  groups: [String],
});

module.exports = User;
