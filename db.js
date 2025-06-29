const mongoose= require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    useNewUrlParser :true,
    useUnifiedTopology :true  
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',()=>{
    console.log('error to MongoDB server');
});

db.on('disconnected',()=>{
    console.log('disconnected to MongoDB server');
});

module.exports = db;