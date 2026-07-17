const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {registerUser, loginUser, logoutUser, getCurrentUser} = require("../controllers/authController");    

router.get("/me", authMiddleware, getCurrentUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

module.exports = router;