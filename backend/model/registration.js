const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  venue: String,
  startDate: String,
  selection: String,
});

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
