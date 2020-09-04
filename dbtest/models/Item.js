const mongoose =require("mongoose");
const {Schema} = mongoose;

const ItemSchema = new Schema({

    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        min:0,
    },
    option:{
        optionName:String,
        optionValue:String,
    },
},{
    timestamps: true
}
);

module.exports = mongoose.model("Item",ItemSchema);