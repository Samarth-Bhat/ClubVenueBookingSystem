const { insertRegistration, countRegistrations, findRegistrationByDate } = require("../services/dbService");

const handleRegistration = async (req, res) => {
  try {
    const data = req.body;
    const venue = data.venue;

    const count = await countRegistrations(venue);

    if (count === 0) {
      await insertRegistration(data);
      res.json({ record: "successful" });
    } else {
      const foundRecords = await findRegistrationByDate(data.startDate, venue);
      if (foundRecords.length === 0) {
        const adjustedStartDate = (parseInt(data.startDate.substring(0, 2)) - 1).toString() + data.startDate.substring(2);
        const additionalCheck = await findRegistrationByDate(adjustedStartDate, venue);

        if (additionalCheck.length === 0) {
          await insertRegistration(data);
          res.json({ record: "successful" });
        } else {
          res.json({ record: "unsuccessful" });
        }
      } else {
        res.json({ record: "unsuccessful" });
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ record: "unsuccessful" });
  }
};

module.exports = { handleRegistration };
