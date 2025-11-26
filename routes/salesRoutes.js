import express from "express";
const router = express.Router();

router.post("/agents", createAgent);

export default router;
