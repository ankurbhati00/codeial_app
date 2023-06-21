const User = require('../models/user');

//user home 
module.exports.user = function (req , res){
return res.render('home', {
    title:" home"
});
};

//user sign in
module.exports.signIn = function (req, res){
return res.render('sign_in',{
    title:"Sign In"
})
};

//user sign up
module.exports.signUp = function (req, res){
return res.render('sign_up',{
    title:"Sign Up"
})
};


//create sign up using user credentials;
module.exports.userSignUp = function (req, res){
  const user = User.findOne({email:req.body.email})
console.log(`this is ${user==null}`);
        if(!user){
            User.create(req.body, function(err, user){
           if(err){console.log("err in create user !!"); return};
        console.log("user created successfully");
           return res.redirect('/user/sign-in');
        
            });
        }else{
            return res.redirect('/user/sign-up');
        }
        
    };
    


    


//sign in using user credentials;
module.exports.userSignIn = function (req, res){
    //todo later
    console.log(req.body);
    return res.redirect('/user');
}
