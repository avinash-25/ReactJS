import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import app from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 4000;



// Databse connection call
connectDB()
    
    
// Server connection call
app.listen(PORT, ()=>{
    console.log(`Server is running: http://localhost:${PORT}`);
});




