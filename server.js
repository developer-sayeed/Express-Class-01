const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const { json } = require("express");

// Enviroment varibale

dotenv.config();

const PORT = process.env.PORT || 4000;

// innit Express

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// static

app.use("/", express.static("public"));

// Routing

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "public/blog.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.get("/speakers", (req, res) => {
  res.sendFile(path.join(__dirname, "public/speakers.html"));
});
app.get("/schedule", (req, res) => {
  res.sendFile(path.join(__dirname, "public/schedule.html"));
});
app.get("/single_blog", (req, res) => {
  res.sendFile(path.join(__dirname, "public/blog-single.html"));
});

app.post("/contact_data", (req, res) => {
  res.status(200).json(req.body)
});



app.listen(PORT, () => {
  console.log(`server is runing on port  ${PORT}`.bgGreen.black);
});
