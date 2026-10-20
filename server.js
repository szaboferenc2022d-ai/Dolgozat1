import express from 'express';
import dotenv from 'dotenv';
import db from './db.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res)=>{
    res.send("Szerver fut!");
})

app.get("/termekek", async (req, res)=>{
        try{
            const [rows] = await db.query("SELECT * FROM termekek");
            res.send("200");
        }
        catch{
             console.log(error, "A szerver kapcsolat hiba");
        }
} )

app.listen(PORT, (req,res) =>{
    console.log(`Szerver fut: http://localhost:${PORT}`)
})

