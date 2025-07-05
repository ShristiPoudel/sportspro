import express from "express";
import  "dotenv/config";
import cors from "cors";
import pool from "./config/db.js";


const app = express();
const port = process.env.PORT || 8001;

//middlewares
app.use(express.json());
app.use(cors());

//routes
// app.get("/",(req,res)=>{
//     res.send("Backend is working");
// });

//testing postgress connection
app.get("/",async(req,res)=>{
    const result = await pool.query("Select current_database()");
    res.send(`The database name is: ${result.rows[0].current_database}`)
});

app.listen(port,()=>{
    console.log("Server has started");
});