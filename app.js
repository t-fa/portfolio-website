const express = require("express"),
              app = express(),
              bodyParser = require("body-parser"),
            //   config = require("./secrets"),
              nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
var port = process.env.PORT || 8080;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tomfattahbot@gmail.com',
        pass: process.env.EMAIL_PASS
    }
});

/*
TO DO:
-Add more projects to main page
-Make projects section prettier
-Make site responsive
-Make contact form validate input
*/

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/', function(req, res){
    var data = {};
    data.name = req.body.name;
    data.email = req.body.email;
    data.subject = req.body.subject;
    data.body = req.body.body;
    var content = "Name: " + data.name + "\n Email: " + data.email + "\n Subject: " 
    + data.subject + "\n Body: " + data.body + "\n Sent from nodeMailer.";
    
    var mailOptions = {
        from: data.name,
        to: "thomas.fattah@gmail.com",
        subject: data.subject,
        text: content
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        } else {
            res.json();
            console.log('Email sent: ' + info.response);
        }
    });
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(req,res){
  res.status(500);
  res.render('500');
});

app.listen(port, function(){
    console.log('Server is running on ' + port + '; press Ctrl-C to terminate.');
  });