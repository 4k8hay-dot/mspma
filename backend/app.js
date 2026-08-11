const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

connectDB();

// Disable Express version information
app.disable("x-powered-by");

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});