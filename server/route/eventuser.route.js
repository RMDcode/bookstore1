import express from "express";
import { event} from "../controller/eventuser.controller.js";

const router = express.Router();

router.post("/", event);

export default router;