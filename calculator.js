//jshint esversion:6

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    let weight = (req.body.weight);
    let height = (req.body.height);
    let result = (weight / (Math.pow(height, 2))) * 703;
    res.send("Your BMI is " + Math.round(result));
});

app.get("/dogyears", function(req, res) {
    res.sendFile(__dirname + "/dogyears.html");
});

app.post("/dogyears", function (req, res) {
    let dogAge = (req.body.dogAge);
    if (dogAge === 1) {
        res.send("Your dog is 15 in human years.");
    } else if (dogAge === 2) {
        res.send("Your dog is 24 in human years.");
    } else {
        res.send("Your dog is " + (24 + ((dogAge - 2) * 5)) + " in human years.");
    }
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});