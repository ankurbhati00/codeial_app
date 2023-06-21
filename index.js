const express = require('express');
const port = 8000;
const db = require('./config/mongodb');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');

app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
name:'codeial',
secret:'temprory',
saveUninitialized:false,
resave:false,
cookie:{
    maxAge:(1000*60*50)
}
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('/user', require('./router/user'));


app.listen(port, (err)=>{
    if(err){
        console.log(`Err in port :${port}`);
        return;
    }

    console.log("server is up !!")
});