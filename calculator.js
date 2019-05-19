//jshint esversion:6

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    let weight = (req.body.weight);
    let height = (req.body.height);
    let result = (weight/(Math.pow(height, 2))) * 703;
    res.send("Your BMI is " + Math.round(result));
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});