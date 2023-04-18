var fs = require('fs');
var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    //__dirname : It will resolve to your project folder.
});
app.get('/func.js',function(req,res){
    res.sendFile(__dirname+'/func.js');
    //__dirname : It will resolve to your project folder.
});

//loading all files in public folder
//see instructions in https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static(__dirname+'/func.js'));
app.listen(3000);