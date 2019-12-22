var express = require("express"),
              app = express(),
              bodyParser = require("body-parser"),
              config = require("./secrets"),
              nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set('port', 8080);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tomfattahbot@gmail.com',
        pass: config.emailPassword
    }
});

/*
TO DO:
-Add more projects to main page
-Make projects section prettier
-Make site responsive
-Make contact form validate input
-Make contact form asynchronous holy crap I'm gonna use AJAX????
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
          console.log('Email sent: ' + info.response);
        }
    });    
    res.render('index');
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(req,res){
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Server is running on ' + app.get('port') + '; press Ctrl-C to terminate.');
  });