import mongoose from "mongoose";

const {Schema} = mongoose;

const productschema = new Schema({
    title:{
        type: String, 
        require:[true]
      },
      description:{
        type: String,
        require:[true]
      },
      price:{
        type: Number,
        require:[true]
      },
      category:{
        type: String,
        require:[true]
      },
      image:{
        type: String,
      },
    },
    {timestamps:true})
    
 

const Product = mongoose.model('item', productschema)

export default Product