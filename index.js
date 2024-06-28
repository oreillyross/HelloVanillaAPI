var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.json({ Message: "Hello from Vanilla JS!" });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
