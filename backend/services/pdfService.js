const fs = require("fs");
const pdf = require("pdf-creator-node");

const createPDF = (users, fileName) => {
  const html = fs.readFileSync("C:\\Web Dev\\project\\pdf_folder\\pdf_template.html", "utf-8");

  const options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "15mm",
      contents: '<div style="text-align: center;"></div>',
    },
    footer: {
      height: "28mm",
      contents: {
        first: "",
        2: "Second page",
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
        last: "Last Page",
      },
    },
  };

  const document = {
    html: html,
    data: {
      users: users,
    },
    path: `pdf_folder/${fileName}`,
    type: "",
  };

  return pdf.create(document, options);
};

module.exports = { createPDF };
