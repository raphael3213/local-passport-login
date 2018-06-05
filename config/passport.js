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
      if(User.password!=User.unhasher(password)){
      return done(null,false)
      }
      
      return done(null,User);
      
    
    })
    
    
    }
  
  ))
  
  passport.use('register',function(req,username,password,done)
               {
  
    Users.findOne({user:username},function(err,user)
                  {
    if(user)
    {
    done(null,false)
    }
      
     else{
     var newUser=new Users();
       newUser.user=username;
       newUser.password=Users.hasher(password);
     newUser.save(function(err){
     if(err){console.log("error in storing in database")
            done(null,false);
            }
       done(null,newUser);
       
     })
     } 
      
    })
    
  })

}
  

