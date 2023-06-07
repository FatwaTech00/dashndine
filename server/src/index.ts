import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

const app = express();
const port = parseInt(process.env.PORT) || 8080;

dotenv.config();
// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(
    cors({
        credentials: true,
    })
);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});

// MongoDB setup
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error: Error) => {
    console.log(error);
});

// Route setup
app.use("/api", router());
