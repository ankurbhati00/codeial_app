const User = require('../models/user');
const Post = require('../models/post');
//user home 
module.exports.user =async function (req , res){
// await Post.find({user:req.user._id})
// .then(function(posts){
//     return res.render('home', {
//         title:" home",
//         posts:posts
//     });
// })
// .catch(err=>console.log(err));

await Post.find({}).populate('user')
.then(function(posts){
    console.log(posts);
    return res.render('home', {
        title:" home",
        posts:posts
    });
})
.catch(err=>console.log(err));


};

//user sign in
module.exports.signIn = function (req, res){
if(req.isAuthenticated()){
    return res.redirect('/user');
}

return res.render('sign_in',{
    title:"Sign In"
})
};

//user sign up
module.exports.signUp = function (req, res){
    if(req.isAuthenticated()){
        return res.redirect('/user');
    }
return res.render('sign_up',{
    title:"Sign Up"
})
};


//create sign up using user credentials;
module.exports.userSignUp = async function (req, res){
  const user =await User.findOne({email:req.body.email})
                       .catch(err=>console.log(err));
        if(!user){
           await User.create(req.body)
           .catch(err=>console.log(err));
           console.log("user created successfuly");
           return res.redirect('/user/sign-in');
        
            }else{
            return res.redirect('/user/sign-up');
        }
        
    };
    
//destroy session and sign out
module.exports.destroySession= function (req, res){
req.logout((err)=>{
    if(err){
        return next(err);
    }
});
return res.redirect('/user/sign-in');

}



    


//sign in using user credentials;
module.exports.userSignIn = function (req, res){
    //todo later
    console.log(req.body);
    return res.redirect('/user');
}
