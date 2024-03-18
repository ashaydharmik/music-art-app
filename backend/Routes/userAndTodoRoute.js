const express = require("express");

const {
  registerUser,
  loginUser,
  updatePassword,
  currentUser,
} = require("../Controller/userController");

const errorHandler = require("../Middleware/errorHandler");
const token = require("../Middleware/validateToken");





const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);



router.use(errorHandler);

module.exports = router;
