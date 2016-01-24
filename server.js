var express = require('express');
var app = express();

app.get("/", function (req, res) {
    return res.sendFile("public/page/index.html");
});

app.listen(3000, function () {
 console.log('jozo bozo pro');
});