const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const api = require("./routes/api");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to mongodb atlas with the conenction string in the .env file
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to DB");
  }
);

app.use(api);

app.listen(process.env.HOST_PORT, () => {
  console.log(`Listening at ${process.env.HOST_NAME}:${process.env.HOST_PORT}`);
});
