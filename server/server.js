import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

const app = express();

app.use(express.json());
app.use(cors());

// dotenv.config();

// Connect to the database
connectDB();

app.get("/", (req, res) => res.send("server is running"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
