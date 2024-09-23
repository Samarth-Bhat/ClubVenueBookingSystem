const express = require("express");
const { handleRegistration } = require("../controllers/registrationController");

const router = express.Router();

router.post("/", handleRegistration);

module.exports = router;
