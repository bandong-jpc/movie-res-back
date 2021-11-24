const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcryptjs.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

module.exports = User = mongoose.model("user", UserSchema);
