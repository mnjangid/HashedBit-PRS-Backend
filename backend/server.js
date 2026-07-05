const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const reviewRoutes = require("./routes/reviewRoutes");
const db = require("./config/db");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Product Review System API is running 🚀"
    });
});

// API Routes
app.use("/reviews", reviewRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {

        const connection = await db.getConnection();
        console.log("✅ MySQL Connected Successfully");
        connection.release();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (error) {

        console.error("❌ Database Connection Failed");
        console.error(error.message);

    }
};

startServer();