const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const aiRoutes = require("./routes/aiRoutes");

const Product = require("./models/Product");

// NEW
const authRoutes = require("./routes/authRoutes");

const app = express();

// ==============================
// Middleware
// ==============================

app.use(cors());
app.use(express.json());

// ==============================
// MongoDB Connection
// ==============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// ==============================
// Auth Routes
// ==============================

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {
  res.json({
    message: "KalaSetu API Running",
  });
});

// ==============================
// GET ALL PRODUCTS
// ==============================

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// GET SINGLE PRODUCT
// ==============================

app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// CREATE PRODUCT
// ==============================

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// UPDATE PRODUCT
// ==============================

app.put("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// DELETE PRODUCT
// ==============================

app.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// SEARCH PRODUCT
// ==============================

app.get("/api/products/search/:name", async (req, res) => {
  try {
    const products = await Product.find({
      name: {
        $regex: req.params.name,
        $options: "i",
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==============================
// Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});