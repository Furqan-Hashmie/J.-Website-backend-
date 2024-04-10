
import User from '../Models/UserSchema.js';
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

export const getalluser =async  (req, res, next) => {
    
  try {
    const getdata = await User.find({})
    res.json({ message: getdata })
  } catch (error) {
     res.json({ message: error})
  }
}
export const getUserbyid = (req, res, next) => {
    res.send(product)
}
export const addNewuser = async (req, res, next) => {
   const newproduct = req.body;
   const {name , email, password} = req.body
   if(!name){
    res.status(404).json({ message: "❕ please enter a name" })
   }
   if(!email){
    res.status(404).json({ message: "❕  please enter an email address" })
   }
   if(!password){
    res.status(404).json({ message: "❕  please enter a password" })
   }
   try { 
    let registered = await User.findOne({email:email})
    if(registered){
        res.status(404).json(
          { 
            message: "❕  user already registered please login",
            success : false
         }
          )
    }
       newproduct.password =await bcrypt.hash(newproduct.password,10)
       
     const result = await User.create(newproduct);
     res.json({
      result,
      message:"user has been registered",
      success:true
     })
   }
    catch (error) {
    res.json(
      { message : "user not add" }
      )
   }
}
export const LoginUser =async (req, res, next)=>{
    try {
        let {email, password} = req.body;
        if(!email){
          return (
            res.status(404).json({ message: "❕ please enter an email address" })
          );
        }
        if(!password){
          return (
            res.status(404).json({ message: "❕ please enter a password"})
          );
        }
        const user = await User.findOne({email: email})
        if(!user){
           return res.status(401).json({
            success: false,
            message:"Does not find email please make an accout and try again"
           })
        } 
        
        const passwordMatched = await bcrypt.compare(password, user.password)

        if(!passwordMatched){
           return res.status(401).json({
                 success: false,
                 message: "your password is incorrect  please try again"
           }
           )
        };
        //   JWt
       
        const token =await jwt.sign({ payload:user}, process.env.SECRET,{ expiresIn: "10h" });

       
        req.token = token;
        res.json({
          user,
          token
        })

    } catch (error) {
        next(error);
    }
 
}
export const updateUser = (req, res, next) => {
    res.send(person)
}
export const deleteUser = (req, res, next) => {
    res.send(person)
}