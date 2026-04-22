// console.log("Web serverni boshlash");
// const express = require('express');
// const res = require("express/lib/response");
// const app = express();
// const http = require('http')
// const fs = require('fs')

// let user;
// fs.readFile("database/user.json", "utf8",(err, data) => {
// if(err){
//     console.log("ERROR", err);
// } else {
//     user = JSON.parse(data)
// }
// });
// //1 Kirish kodlari
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //2 session code

// //3 Views code
// app.set("views","views");
// app.set("view engine","ejs");

// //4 Routing code
// // app.get("/",function(req,res){
// // res.end(`<h1 style="background:red">Hello world by Diana</h1>`);
// // });
// // app.get("/gift",function(req,res){
// // res.end(`<h1 style="background:pink">siz sovg'alar bo'limidasiz</h1>`);
// // });
// app.post("/create-item",(req, res)=>{
// console.log(req.body);
// res.json({test:"success"});
// });

// app.get('/author',(req,res)=>{
// res.render("author",{user: user});
// });

// app.get('/', function(req, res){
//     res.render('harid');
// });

// const server = http.createServer(app);
// let PORT =3000;
// server.listen(PORT, function(){
//     console.log(`The server running successfully on port: ${PORT}`);
// });
console.log("Web serverni boshlash");

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');


const user = JSON.parse(
    fs.readFileSync("database/user.json", "utf8")
);

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
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
    res.render('harid');
});

// server
const server = http.createServer(app);

server.listen(3000, () => {
    console.log("The server running successfully on port: 3000");
});