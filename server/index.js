var express = require("express");
var cors = require("cors");

var port = process.env.PORT || 80;

var app = express();

app.use(cors());

app.use("/", express.static(__dirname + "/public", { index: "index.html" }));

app.use("**", express.static(__dirname + "/public", { index: "index.html" }));

app.listen(port, function () {
  // console.log('Listening on port 80');
});
