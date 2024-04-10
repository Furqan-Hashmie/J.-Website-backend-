import express from 'express';
import cors from "cors";
import userRouter from  "./Router/userRouter.js"
import router from './Router/productRoute.js';
import  { dbconnection }  from './Config/ConnectionDb.js';
import bodyParser from 'body-parser';
import 'dotenv/config'

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)
app.use('/api', userRouter)
const port = process.env.PORT;
dbconnection();
app.listen(port, () => {
  console.log(`Server is listening on the port ${port}`)
})