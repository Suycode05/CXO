import express from "express";
import { requireAuth } from "../middlewares/requireAuth.js";
import { getExpertProfile, updateExpertProfile } from "../controllers/expertController.js";

const router = express.Router();

router.get("/profile", requireAuth, getExpertProfile);
router.put("/profile", requireAuth, updateExpertProfile);

export default router;
