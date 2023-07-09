const express = require('express');
var cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;

  // Set up the transporter object to send the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elhapvc@gmail.com',
      pass: 'tifwkdytbkojkbfj'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Set up the email options
  const mailOptions = {
    from: 'elhapvc@gmail.com',
    to: 'elhapvc@gmail.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('There was an error sending the email.');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('Your message was sent successfully!');
    }
  });
});

app.listen(5500, () => {
    console.log('Server is listening on port 5500');
  });
