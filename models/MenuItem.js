const mongoose=require('mongoose');

const menuItemSchema=new mongoose.Schema({
     name:{
        type:String,
        require:true
    },
    price:{
        type:Number
    },
    taste:{
        type:String,
        enum:['Sweet','Spicy','Sour'],
        require:true,
    },
    is_drink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0
    },
    
});

const menuItem=mongoose.model('MenuItem',menuItemSchema);
module.exports = menuItem;
