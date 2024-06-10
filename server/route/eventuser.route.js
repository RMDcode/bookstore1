import express from "express";
import { event} from "../controller/eventuser.controller.js";

const router = express.Router();

router.post("/eventuser", event);

export default router;