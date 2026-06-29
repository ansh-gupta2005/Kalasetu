const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "KalaSetu API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
let products = [
  {
    id: 1,
    name: "Silk Dupatta",
    category: "Textiles",
  },
  {
    id: 2,
    name: "Clay Pottery",
    category: "Pottery",
  },
];
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (p) => p.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.status(200).json(product);
});
app.post("/api/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex(
    (p) => p.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products[index] = {
    ...products[index],
    ...req.body,
  };

  res.status(200).json(products[index]);
});
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter((p) => p.id !== id);

  res.status(200).json({
    message: "Product deleted successfully",
  });
});
app.get("/api/products/search/:name", (req, res) => {
  const result = products.filter((p) =>
    p.name
      .toLowerCase()
      .includes(req.params.name.toLowerCase())
  );

  res.status(200).json(result);
});