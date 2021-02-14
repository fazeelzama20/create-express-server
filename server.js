//jshint esversion:6

const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get("/", (req, res) => {
  res.send('Hello world');
});

app.get("/contact", (req, res) => {
  res.send("fazeel.zama20@gmail.com");
});
