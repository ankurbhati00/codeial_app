const express = require('express');
const port = 8000;
const db = require('./config/mongodb');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//mongo store si used to store the session cookie in the db
app.use(session({
name:'codeial',
secret:'blahsomething',
saveUninitialized:false,
resave:false,
cookie:{
    maxAge:(1000*60*50)
},
store: new MongoStore({
    mongooseConnection:db,
    autoRemove:'disabled'
}, function(err){
    if(err){
        console.log(err|| 'connect-mongodb setup ok');
    }
}
)
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


app.use('/user', require('./router/user'));
app.use('/post', require('./router/post'));

app.listen(port, (err)=>{
    if(err){
        console.log(`Err in port :${port}`);
        return;
    }

    console.log("server is up !!")
});