const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
    const newMenuItem = new MenuItem(data);
     //newPerson.name = data.name;
    const response= await newMenuItem.save();
    console.log('menu save successfully');
    res.status(200).json(response);
    }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

router.get('/',async (req,res)=>{
    try{
    const data= await MenuItem.find();
    console.log('data fetch successfully');
    res.status(200).json(data);
    }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});
    }
});
module.exports=router;