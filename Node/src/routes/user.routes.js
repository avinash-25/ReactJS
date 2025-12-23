import express from "express";
import { registerUser, loginUser, logoutUser, getProfile } from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signin", registerUser);
router.post("/login", loginUser );
router.get("/logout", logoutUser );
router.get("/profile",auth, getProfile );

export default router;