const mongoose= require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

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