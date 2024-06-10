import express from "express";
import { special } from "../controller/specialuser.controller.js";

const router = express.Router();

router.post("/specialuser", special);

export default router;
