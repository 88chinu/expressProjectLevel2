const express = require("express")
const connectDB = require('./config/db');

const app = express()
const port = 5000

connectDB();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("hello world")
})

app.listen(port, () =>{
    console.log(`my application is ${port}`)
})
