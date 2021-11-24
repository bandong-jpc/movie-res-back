const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  summary: String,
});

module.exports = Movie = mongoose.model("movie", MovieSchema);
