const express=require('express');
const app =express();
const db=require('./db');
require('dotenv').config();
const PORT=process.env.PORT || 3000;

//body parser is a middleware which is used to parse and extract the body of incoming HTTP requests
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send("hello world");
})

//import the person routes
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

//import the menuItem routes
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(PORT,()=>{
    console.log("server run")
})