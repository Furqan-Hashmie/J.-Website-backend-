
import express from 'express';
import { createNewItem, deleteItem, deleteallItem, getItembyid, getallItem, updateItem } from '../Controller/controllProduct.js';
const router = express.Router();

router.route("/item").get(getallItem)
router.route("/item/id").get(getItembyid)
router.route("/item/create").post(createNewItem)
router.route("/item/id").put(updateItem)
router.route("/item/:id").delete(deleteItem)
router.route("/item/delete ").delete(deleteallItem)
export default router ;