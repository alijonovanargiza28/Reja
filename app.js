const express = require('express');
 const res = require("express/lib/response");
 const app = express();

 //MongoDB chaqirish
const db = require('./server').db();

 //1 Kirish kodlari
 app.use(express.static("public"));
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

// //2 session code
// //3 Views code
 app.set("views","views");
 app.set("view engine","ejs");


console.log("Web serverni boshlash");


// Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view code
app.set("views", "views");
app.set("view engine", "ejs");

// routes
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get('/author', (req, res) => {
    res.render("author", { user });
});

app.get('/', (req, res) => {
    res.render('reja');
});

module.exports = app;

