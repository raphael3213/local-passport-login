var passportLocal=require('passport-local').Strategy;
var Users=require('../models/users');


module.exports=function(passport)
{

  passport.serializeUser(function(user,done){
  
    done(null,user.id);
  
  })
  
    passport.deserializeUser(function(id,done){
  
    Users.findById(id,function(err,user){
    
      done(null,user)
      
    })  
  })
  
  
  
  passport.use('register',new passportLocal(
               
    //{passReqToCallback: true}, if this is added then we need to pass req as a parameter in the below function
               function(username,password,done)
               {
  
    Users.findOne({user:username},function(err,user)
                  {
    if(user)
    {
    return done(null,false)
    }
      
     else{
     var newUser=new Users();
       newUser.user=username;
       newUser.password=newUser.generateHash(password);
     newUser.save(function(err){
     if(err){console.log("error in storing in database")
            
            }
       return done(null,newUser);
       
     })
     } 
      
    })
    
  }))
  
  
  passport.use('login',new passportLocal(
  
  function(username,password,done)
    {
    Users.findOne({user:username},function(err,User)
                  {
    if(!User){
    return done(null,false);
    }
      if(!User.unhasher(password)){
      return done(null,false)
      }
      
      return done(null,User);
      
    
    })
    
    
    }
  
  ))
  

}
  

