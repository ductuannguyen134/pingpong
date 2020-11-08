const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var count = 0;

app.get("/",function(req,res){
    console.log(count);
    res.send('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Ping Pong Challenge</title></head><body> <h1>Pong</h1> <h2>Count: ' + count +  '</h2> <form action="/ping" method="post"> <button type="submit" name="submit">Ping</button> </form> </body></html>');
})

app.post("/",function(req,res){
    count++; 
    res.redirect("/");
})

app.get("/ping",function(req,res){
    console.log(count);
    res.send('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Ping Pong Challenge</title></head><body> <h1>Ping</h1> <h2>Count: ' + count +  '</h2> <form action="/" method="post"> <button type="submit" name="submit">Pong</button> </form> </body></html>');
})

app.post("/ping",function(req,res){
    count++;
    res.redirect("/ping");
})


app.listen(3000, function(){
    console.log("Server running on port 3000...");
})