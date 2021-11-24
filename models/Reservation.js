const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  scheduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schedule",
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  seats: [String],
  total: Number,
  date: Date,
  payment: {
    cardNumber: String,
    scode: Number,
    exp: String,
  },
});

module.exports = Reservation = mongoose.model("reservation", ReservationSchema);
