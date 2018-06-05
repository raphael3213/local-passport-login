var router=require('express').Router();
var passport=require('passport')
router.get('/login',function(req,res,next)
           {
})


router.post('/register',passport.authenticate('login',{
successRedirect:'/profile'
,failureRedirect:'/error'
}))

 router.get('/profile', isLoggedIn, function(req,res){
        res.json({user : req.user});
    });

module.exports=router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated())
    return next();
    res.redirect('/');
};