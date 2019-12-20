var express = require("express"),
              app = express(),
              bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set('port', 8080);

/*
TO DO:
-Add more projects to main page
-Make projects section prettier
-Make site responsive
-Make contact form actually work
-Make contact form validate input
-404 and 500 pages
*/

app.get('/', function(req, res){
    res.render("index");
});

app.get('/contact', function(req, res){
    res.render("contact");
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