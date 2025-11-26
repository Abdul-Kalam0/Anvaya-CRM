import express from "express";
const router = express.Router();
import {
  leadCreation,
  getAllLeads,
  leadDelete,
  leadUpdate,
} from "../controllers/leadControllers.js";

router.post("/leads", leadCreation);
router.get("/leads", getAllLeads);
router.put("/lead/:id", leadUpdate);
router.delete("/lead/:id", leadDelete);

export default router;
