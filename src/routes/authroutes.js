const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");


const { login, changePassword, createUserByAdmin } = require("../controllers/authController");


router.post("/login", login);
router.post("/change-password", changePassword);
router.post("/create-user", protect, allowRoles("admin"), createUserByAdmin);

module.exports = router;
