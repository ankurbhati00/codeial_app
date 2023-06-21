const mongoose = require('mongoose');

//connect to the mongo db
mongoose.connect('mongodb://127.0.0.1/authantication');

const db = mongoose.connection;

db.on('error', (err)=>console.log(err));

db.once('open', ()=>console.log('successfully connected to database...'));

module.exports = db;