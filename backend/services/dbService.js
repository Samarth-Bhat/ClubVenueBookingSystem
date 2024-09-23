const Registration = require("../models/Registration");
const Event = require("../models/Event");

// Function to insert registration data
const insertRegistration = async (data) => {
  const registration = new Registration(data);
  return registration.save();
};

// Function to count documents in the registration collection
const countRegistrations = async (venue) => {
  return Registration.countDocuments({ venue });
};

// Function to find registration by start date
const findRegistrationByDate = async (startDate, venue) => {
  return Registration.find({ startDate, venue }).exec();
};

// Function to insert event details
const insertEvent = async (data) => {
  const event = new Event(data);
  return event.save();
};

module.exports = {
  insertRegistration,
  countRegistrations,
  findRegistrationByDate,
  insertEvent,
};
