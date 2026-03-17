const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/database");

// Routes
const productRoutes = require("../../../routes/productroutes");
const categoryRoutes = require("../../../routes/categoryroutes");
const orderRoutes = require("../../../routes/orderroutes");
const userRoutes = require("../../../routes/userroutes");

dotenv.config();

// MongoDB connect
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/admin", express.static(__dirname + "/../../frontend/admin"));

// Routes API
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Harzo Backend Running 🚀");
});

// Server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});