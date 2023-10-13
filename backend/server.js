import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import initRoutes from "./routes/routes.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const PORT = process.env.PORT || 2000;

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  prisma.$connect();
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  initRoutes(app);
} catch (error) {
  console.log("Database not connected...");
}
