import express from 'express';
import { LoginUser, addNewuser, deleteUser, getUserbyid, getalluser, updateUser } from '../Controller/userController.js';

const router = express.Router();

router.route("/user").get(getalluser)
router.route("/user/id").get(getUserbyid)
router.route("/user").post(addNewuser)
router.route("/user/id").put(updateUser)
router.route("/user/id").delete(deleteUser)
router.route("/login").post(LoginUser)

export default router ;