const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password, birthdate, contact } = req.body;

  /* var account = User.findOne({ email: email }, (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Server Error: " + err.message, error: true });

    console.log(data);

    if (data != null)
      return res
        .status(400)
        .json({ message: "Email already used.", error: true });
    else return res.status(200).json({ message: "Ok", error: true });
  }); */

  let user = new User({
    email,
    password,
    firstName,
    lastName,
    contact,
    birthdate: new Date(birthdate),
  });

  user.save((err, data) => {
    if (err) {
      if (err._message == "user validation failed")
        return res
          .status(400)
          .json({ message: "Field is missing", error: true });
      else if (err.code === 11000)
        return res
          .status(400)
          .json({ message: "Email already registered.", error: true });
      else
        return res
          .status(500)
          .json({ message: "Server Error: " + err.message, error: true });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.KEY);

      return res
        .status(200)
        .json({ message: "Account registered.", error: false, token: token });
    }
  });
});

module.exports = router;
