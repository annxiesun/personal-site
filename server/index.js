const express = require("express");
const nodemailer = require("nodemailer");
var cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});


const path = require("path");


app.use('/', express.static(path.join(__dirname, "..", "build")));
app.use('/', express.static("public"));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.post("/send", function (req, res) {
  const { email, name, message } = req.headers;
  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
