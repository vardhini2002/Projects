import "dotenv/config";
import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import db from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Employee API is running",
    });
});

app.use("/employees", employeeRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});