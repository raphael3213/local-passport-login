
module.exports=function(app,passport)
{
app.get('/auth/register', function(req, res){
        res.json({message:"yo"});
    });
  
app.post('/auth/register',passport.authenticate('register',{
successRedirect:'/profile'
,failureRedirect:'/error'
}))

 app.get('/profile', isLoggedIn, function(req,res){
        res.json({user : req.user});
    });


}
function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
    return next();
    res.redirect('/');
};