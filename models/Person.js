const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

personSchema.pre('save', async function (next){
    const person=this;
    //Hash the password only if it has been modified( or is new)
    if(!person.isModified('password'))return next();
    try{
        //hash password generate
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(person.password,salt);
        //override the plain password with the hashed one
        person.password=hashedPassword;
        next();
    }catch(err){
        next(err);
    }
})

personSchema.methods.comparePassword=async function(candidatePassword){
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
const Person=mongoose.model('Person',personSchema);
module.exports=Person;