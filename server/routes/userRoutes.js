const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {getCurrentUser, updateCurrentUser, deleteCurrentUser} = require("../controllers/userController");

router.get("/me", authMiddleware, getCurrentUser);

router.patch("/me", authMiddleware, updateCurrentUser);

router.delete("/me", authMiddleware, deleteCurrentUser);

module.exports = router;