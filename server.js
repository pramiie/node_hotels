const express=require('express');
const app =express();
const db=require('./db');

require('dotenv').config();
const PORT=process.env.PORT || 3000;
const passport=require('./auth');
const { jwtAuthMiddleware } = require('./jwt');

//body parser is a middleware which is used to parse and extract the body of incoming HTTP requests
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})
app.get('/',localAuthMiddleware,(req, res)=>{
    res.send("welcome to our hotel");
})

//import the person routes
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

//import the menuItem routes
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',localAuthMiddleware,menuRoutes);

app.listen(PORT,()=>{
    console.log("server run")
})