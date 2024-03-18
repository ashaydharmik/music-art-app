const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    mobile:{
      type: String,
      required: [true, "Please enter your Mobile Number"],
      unique: [true, "Email address already exist"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: [true, "Email address already exist"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model("User", userSchema);
