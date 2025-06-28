const express=require('express');
const router=express.Router();
const Person=require('./../models/Person');
router.post('/',async (req,res)=>{
    try{
        const data=req.body;
    const newPerson = new Person(data);
     //newPerson.name = data.name;
    const response= await newPerson.save();
    console.log('data save successfully');
    res.status(200).json(response);
    }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

router.get('/',async (req,res)=>{
    try{
    const data= await Person.find();
    console.log('data fetch successfully');
    res.status(200).json(data);
    }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

router.get('/:workType',async(req,res)=>{
   try{
     const workType = req.params.workType;
    if(workType=='chef'|| workType=='manager' || workType=='waiter' ){
        const response=await Person.find({work:workType});  
        console.log('data fetched');
        res.status(200).json(response);      
    }else{
        res.status(404).json({error:'invalid work type'});
    }
   }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

router.put('/:id',async(req,res)=>{
   try{
     const personId = req.params.id;
     const updatedPersonData=req.body;
    
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,//return the update document
            runValidators:true,//Run mongoose validation
        }); 
        if(!response){
            res.status(404).json({error:'Person not found'});

        } 
        console.log('data updated');
        res.status(200).json(response);      
   }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

router.delete('/:id',async(req,res)=>{
   try{
     const personId = req.params.id;
   
    
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:'Person not found'});

        } 
        console.log('data deleted');
        res.status(200).json({message:'person deleted sucessfully'});      
   }catch(error){
        console.log(error);
    res.status(500).json({error:'internal server error'});

    }
});

module.exports=router;