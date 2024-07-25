import express, { raw } from "express";


const app = express()
const port = 3001;


app.get("/", (req,res) => {
    res.send("<h1>Willkommen</h1><a href='http://localhost:3001/about'>about</a>");
})

app.get("/about", (req,res) => {
    res.send("<h1>About Page</h1><a href='http://localhost:3001/contact'>contact</a>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact Page</h1><a href='http://localhost:3001/'>home</a>");
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})


