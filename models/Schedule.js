const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  cinemaCode: String,
  date: Date,
  price: Number,
});

module.exports = Schedule = mongoose.model("schedue", ScheduleSchema);
