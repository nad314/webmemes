var express = require('express');
var app = express();

app.get("/", function (req, res) {
    return res.send("success");
});

app.listen(3000, function () {
 console.log('Battlecruiser operational.');
});