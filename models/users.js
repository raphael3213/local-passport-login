var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');


var userSchema=mongoose.Schema(
  {
  user:{
  type:String,
    unique:true
  },
    password:{
    type:String
    }
  
  
  });


var hasher=function(password)
{
return bcrypt.hashSync(password,10);
}

var unhasher=function(password)
{
return bcrypt.compareSync(password,this.password)
}

module.exports=mongoose.model('users',userSchema);
