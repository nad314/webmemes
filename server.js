var express = require('express');
var app = express();
var path = require("path");

app.get("/", function (req, res) {
    return res.sendFile(path.join(__dirname, "public/page/", "index.html"));
});

app.get("/poboljsani", function (req, res) {
    return res.sendFile(path.join(__dirname, "public/page/", "poboljsani.html"));
});






app.listen(3000, function () {
 console.log('jozo bozo pro');
});