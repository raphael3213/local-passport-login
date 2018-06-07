
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


userSchema.methods.generateHash=function(password)
{
return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
}

userSchema.methods.unhasher=function(password)
{
return bcrypt.compareSync(password,this.password)
}

module.exports=mongoose.model('users',userSchema);
