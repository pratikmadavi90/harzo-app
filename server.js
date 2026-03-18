const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/database");

// Routes
const productRoutes = require("./routes/productroutes");
const categoryRoutes = require("./routes/categoryroutes");
const orderRoutes = require("./routes/orderroutes");
const userRoutes = require("./routes/userroutes");

dotenv.config();

// DB connect
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔐 ADMIN LOGIN ROUTE 
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin", "login.html"));
});

// 📁 STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// 📁 uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🔁 ROOT → LOGIN
app.get("/", (req, res) => {
  res.redirect("/admin");
});

// 🧪 TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Harzo Backend Running 🚀");
});

// 🔗 API ROUTES
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

// 🚀 PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});