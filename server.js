// Dependencies

require('dotenv').config();

var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');
var path = require('path');

//For SendGrid NPM Package
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);

var PORT = process.env.PORT || 3001;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "flourish_db";
var collections = ["users", "messages"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('flourish/build'));
}
  //allow the api to be accessed by other apps
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });

//Route to post user emails
app.post('/savedemails', function (req, res) {
  // console.log(req.body.userEmail);
  var msg = {
    to: req.body.userEmail,
    from: 'info@flourish.com',
    subject: 'Welcome to Flourish!',
    html: '<p>What took you so long?</p>' + '<p>In all seriousness, we\'re so glad you made it.</p>' + '<p>We hope you\'re excited to start this jouney with us and promise that we\'ll keep you updated along the way.</p>' + '<p>If you\'re curious to learn more about how Flourish can help your business meet and exceed your goals, click on the link below:</p>' + '<button style="background:Gainsboro"><a href="https://tryflourish.herokuapp.com/demo">How Can Flourish Benefit Your Business?</a></button>' + '<p>Thanks again for signing up and welcome aboard!</p>' + '<p>Cheers,</p>' + '<p>Peter & Michael</p>',
  };
  sgMail.send(msg);

    // console.log(req.body);
    db.users.insert(req.body, function (error, savedEmail) {
        // Log any errors
        if (error) {
            res.send(error);
        } else {
            res.json(savedEmail);
        }
    });
});

//Route to get all saved emails

app.get('/savedemails', function (req, res) {
    // res.send('hi');
    db.users.find({
    }, function (error, result) {
        res.json(result);
    });
});

//Route to post contact us messages
app.post('/contactusmessages', function (req, res) {
  console.log(req.body);
  db.messages.insert(req.body, function (error, message) {
      // Log any errors
      if (error) {
          res.send(error);
      } else {
          res.json(message);
      }
  });
});

//Route to get all contact us messages

app.get('/contactusmessages', function (req, res) {
  // res.send('hi');
  db.messages.find({
  }, function (error, result) {
      res.json(result);
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './flourish/public/index.html'));
});

// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });



