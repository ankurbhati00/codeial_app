const Post = require('../models/post');


module.exports.create =async function(req, res){

   await Post.create({
        content: req.body.content,
        user:req.user._id

    })
    .catch(err=>console.log("err in post create" ,err));

    return res.redirect('/user');
}
