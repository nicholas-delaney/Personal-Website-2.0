const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const router = express.Router();

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

/* POST contact page. */
app.post('/contact', [

    // Sanitize data 
    body('name', 'Please enter your name.').trim().isLength({ min: 1 }).escape(),
    body('email', 'Please enter a valid E-mail address so I can get in contact with you.').trim().isEmail().normalizeEmail().escape(),
    body('message', 'Message field is empty.').trim().isLength({ min: 1 }).escape(),
  
    async function (req, res, next) {
  
      // Validate data
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
  
        // There are errors, render form again with error messages and sanitized data
        res.json({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
          errors: errors.array(),
          formSuccess: false,
        });
      }
      else {
        // Data form is valid
  
        // create message
        const msg = `
          <p>You have a new email from your website! </p>
          <h3>Contact Details:</h3>
          <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
          </ul>
          <h3>Message:</h3>
          <p>${req.body.message}</p>
        `;
  
        // send email with nodemailer
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.SEND_EMAIL_USERNAME,
            pass: process.env.SEND_EMAIL_PASSWORD,
          },
        });
        try {
          let info = await transporter.sendMail({
            from: '"ndelaney.com" <ndelaneydot@gmail.com>',
            to: "nicholasndelaney@gmail.com",
            subject: "Contact Request",
            html: msg,
          });
        } catch (err) {
          console.error(err);
        }
        // send success response
        res.json({ formSuccess: true });
      }
    }
  ]);

// Serve the static files from the React app
app.use(express.static('client/build'));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


module.exports = app;
