const { insertEvent } = require("../services/dbService");
const { createPDF } = require("../services/pdfService");
const { sendEmail } = require("../services/emailService");

const handleEventDetails = async (req, res) => {
  try {
    const users = req.body;

    // Process the venue
    let venueTick = {
      venue_tick1: "",
      venue_tick2: "",
      venue_tick3: "",
    };

    switch (req.body.ticket) {
      case "M":
        users.ticket = "MRD Auditorium";
        venueTick.venue_tick1 = "Yes";
        break;
      case "5":
        users.ticket = "PESU 52 HACKROOM";
        venueTick.venue_tick2 = "Yes";
        break;
      default:
        users.ticket = "TECHPARK SEMINAR HALL";
        venueTick.venue_tick3 = "Yes";
    }

    const fileName = `${users.event_nature}_${users.date}.pdf`;

    // Insert the event details into the database
    await insertEvent(users);

    // Create PDF and send email
    await createPDF(users, fileName);

    const recipient = "bhat.samarth2003@gmail.com";
    const subject = "Club Requesting Venue Booking";
    const text = "Dear Sir, Please acknowledge the file attached and kindly grant permission to the said Club.";
    const attachmentPath = `pdf_folder/${fileName}`;

    await sendEmail(recipient, subject, text, attachmentPath);

    res.json({ record: "successful" });
  } catch (error) {
    console.error("Error during event handling:", error);
    res.status(500).json({ record: "unsuccessful" });
  }
};

module.exports = { handleEventDetails };
