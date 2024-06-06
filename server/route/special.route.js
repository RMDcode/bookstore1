import express  from "express";
import { getSpecial } from "../controller/special.controller.js";

const router = express.Router()

router.get("/",getSpecial);


export default router;