var passportLocal=require('passport-local').Strategy;
var Users=require('../models/users');

module.exports=function(passport)
{

  passport.serializeUrl(function(user,done){
  
    done(null,user._id);
  
  })
  
    passport.deserializeUrl(function(id,done){
  
    Users.findById(id,function(err,user){
    
      done(null,user)
      
    })  
  })
  
  
  passport.use('login',new passportLocal(
  
  function(req,username,password,done)
    {
    Users.findOne({user:username},function(err,User)
                  {
    if(!User){
    return done(null,false);
    }
      if(User.password!=passwor
    
    })
    
    
    }
  
  ))


}
  

