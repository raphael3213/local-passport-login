
var express = require('express');
var app = express();
var mongoose=require('mongoose');
var bp=require('body-parser');
var passport=require('passport');
var session=require('express-session');
var pass=require('./config/passport');
var logger=require('./routes/login')
var helmet=require('helmet')
app.use(express.static('public'));
var cookieParser = require('cookie-parser');
app.use(helmet());
mongoose.connect(process.env.URI,function(err){
    if(err){console.log(err)}
console.log("Connection success");
})


 app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



pass(passport);

app.use(cookieParser());
app.use(bp.json())
app.use(bp.urlencoded({extended:false}))


app.use(session({

secret:"this is a cookie"
  ,saveUninitialized:true,
  resave:true

}))



app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



app.use(passport.initialize());
app.use(passport.session());
logger(app,passport);




var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
