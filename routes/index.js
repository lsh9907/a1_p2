/* Connect and activate Express.js */
var express = require('express');
var app = express.Router();
/* Install nodemailer package for email submissions */
var nodemailer = require('nodemailer');

/* GET Home page with title */
app.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About Me page with a title */
app.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/* GET Projects page with a title */
app.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page with a title */
app.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page with a title */
app.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

/* POST Contact Me page with a title */
app.post('/send', function(req, res, next) {
  /* Activate nodemailer and set options */
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'lshlsh9907@gmail.com',
      pass: 'roqbd0918**'
    }
  });
  var mailOptions = {
    from: 'John Doe <lshlsh9907@gmail.com>',
    to: 'lshlsh9907@gmail.com',
    subject: 'Website Submission',
    text: 'New submission. Name: ' + req.body.name+ ' Email: ' + req.body.email + ' Message: ' + req.body.message,
    html: '<p>New submission</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message Sent: ' + info.response);
    }
  });
  res.render('contactme', { title: 'Contact Me' });
});

// Make this file visible within the rest of the application
module.exports = app;
