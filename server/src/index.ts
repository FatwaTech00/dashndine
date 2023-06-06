import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import { connectDB } from "./config/db";

connectDB();
const app = express();
const port = process.env.PORT || 7070;

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
