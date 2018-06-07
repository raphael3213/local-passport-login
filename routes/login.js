
module.exports=function(app,passport)
{
  
  
  
 
app.get('/auth/register', function(req, res){
        res.json({message:"yo"});
    });
  
app.post('/auth/register',passport.authenticate('register',{
successRedirect:'/profile'
,failureRedirect:'/error'
}))
  
  app.post('/auth/login',passport.authenticate('login',{
successRedirect:'/profile1'
,failureRedirect:'/error1'
}))


 app.get('/profile', isLoggedIn, function(req,res){
        res.json({user : req.user});
    });
  
  app.get('/profile1', isLoggedIn, function(req,res){
    res.render('profile',{username:"moron"}) 
    //res.json({message:"welcome back user"});
    });
  app.get('/error',function(req,res,next){
  
    res.json({Error_message:"Username already used"});
  })
   app.get('/error1',function(req,res,next){
  
    res.json({Error_message:"Username/password incorrect"});
  })


}
function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
    return next();
    res.redirect('/');
};