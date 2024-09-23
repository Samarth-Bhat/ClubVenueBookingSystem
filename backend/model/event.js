const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event_nature: String,
  date: String,
  ticket: String,
  phone_gmail: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
