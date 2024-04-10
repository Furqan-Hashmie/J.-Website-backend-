import mongoose from "mongoose";
import 'dotenv/config'

export const dbconnection =async()=>{

 try {
    const res = await mongoose.connect(process.env.DB_CONNECTION);
    console.log('connection successful' , res.connection.port)
 } catch (error) {
    console.log('error while getting data from database', error)
 }

}

