import express from "express";
import {
  getAllSalesAgent,
  createAgent,
  deleteAgent,
} from "../controllers/agentController.js";
const router = express.Router();

router.post("/agents", createAgent);
router.get("/agents", getAllSalesAgent);
router.delete("/agents/:id", deleteAgent);

export default router;
