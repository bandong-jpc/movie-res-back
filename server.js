const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.HOST_PORT, () => {
  console.log(`Listening at ${process.env.HOST_NAME}:${process.env.HOST_PORT}`);
});
