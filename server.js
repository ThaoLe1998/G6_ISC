var express = require('express');
var bodyParser = require("body-parser")
var app = express();

app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Hearders","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const customer_typeController = require('./controller/customer_typeController')
app.use('/customer_type', customer_typeController)

const {CustomerType, customer} = require('./models/db')

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server is listening at http://" + host +':'+ port)
})