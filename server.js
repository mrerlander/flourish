// Dependencies

require('dotenv').config();

var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');

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

/*
  if we don't do this here then we'll get this error in apps that use this api
  Fetch API cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  read up on CORs here: https://www.maxcdn.com/one/visual-glossary/cors/
*/
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
    subject: 'Thanks for Signing Up!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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

// Listen on port 3001
  app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });



