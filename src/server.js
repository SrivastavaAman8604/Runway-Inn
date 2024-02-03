// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Define a route to handle email sending
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aman.srivastava2639@gmail.com', // Replace with your email
      pass: 'Aman1234', // Replace with your email password
    },
  });

  // Email options
  const mailOptions = {
    from: 'aman.srivastava2639@gmail.com', // Replace with your email
    to,
    subject,
    text,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
