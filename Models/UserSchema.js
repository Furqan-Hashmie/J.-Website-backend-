import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
     type:String,
     require: true,
    },
    email:{
     type:String,
     require: true,
    },
    password:{
        type:String,
        require: true,
    },
    mobile:{
        type:String,
        require: true,
    },
    address:{
        type:String,
        require:true
    },
})
 const User=mongoose.model('user', userSchema);
 
 export default User;