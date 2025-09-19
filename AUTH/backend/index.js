require('dotenv').config();
const express = require('express');
const app = express();
const mongoconnect = require('./connection/db');
const user = require('./routes/userRoute');
app.use(express.json()); //to take the form data in the json format

mongoconnect();


app.use("/api",user);

app.use("/",(req,res)=>{
    res.send("Backend testing");
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`App running on the port http://localhost:${PORT}`);
})