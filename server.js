
var express = require('express');
var app = express();
var mongoose=require('mongoose');
var bp=require('body-parser');
var passport=require('passport');
var session=require('express-session');
var pass=require('./config/passport');
var logger=require('./routes/login')
app.use(express.static('public'));

mongoose.connect(process.env.URI,function(err){
  
  
  if(err){console.log(err)}

console.log("Connection success");
})


app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(session({

secret:"this is a cookie"
  ,saveUninitialized:true,
  resave:true

}))

pass(passport);


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/auth',logger);

app.use(passpot.initializ)

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
