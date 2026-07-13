const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome User",
    user: req.user,
  });
});

// Seller or Admin only
router.get(
  "/seller",
  protect,
  authorize("seller", "admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Seller",
    });
  }
);

// Admin only
router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

module.exports = router;