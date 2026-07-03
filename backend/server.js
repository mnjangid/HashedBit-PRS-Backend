const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const reviewRoutes = require("./routes/reviewRoutes");

const db = require("./config/db");

dotenv.config({
    override: true
});

console.log(process.env.PORT);

const app = express();

app.use(cors());
app.use(express.json());
// console.log("Hello from before reviews")
app.use("/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Test Database Connection
async function startServer() {
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
}

startServer();