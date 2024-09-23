const nodemailer = require("nodemailer");

const sendEmail = (recipient, subject, text, attachmentPath) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pesuclubreg@gmail.com",
      pass: "your_password_here",
    },
  });

  const message = {
    from: "pesuclubreg@gmail.com",
    to: recipient,
    subject: subject,
    text: text,
    attachments: [
      {
        path: attachmentPath,
      },
    ],
  };

  return transporter.sendMail(message);
};

module.exports = { sendEmail };
