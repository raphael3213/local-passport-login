
var express = require('express');
var app = express();
var mongoose=require('mongoose');
var bp=require('body-parser');
var passport=require('passport');
var session=require('express-session');

app.use(express.static('public'));

mongoose.connect(process.env.URI,function(err){
  
  
  if(err){console.log(err)}

console.log("Connection success");
})



app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
