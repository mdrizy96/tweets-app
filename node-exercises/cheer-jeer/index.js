var express = require("express");
var app = express();

app.get("/cheer.txt", function(req, res) {
    res.send("You can fight anxiety");
})

app.get("/jeer.txt", function(req, res) {
    res.send("It is a bad thing to be anxious, and less confident");
})

var server = app.listen(8000, function(){
    console.log("Listening on port 8000");
})
