const express = require("express");
const { handleEventDetails } = require("../controllers/eventController");

const router = express.Router();

router.post("/details", handleEventDetails);

module.exports = router;
