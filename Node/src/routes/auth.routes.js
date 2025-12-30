import express from "express";
import { registerUser, loginUser, logoutUser, verifiyEmail, verifyOtp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verifyEmail/:token", verifiyEmail);
router.post("/verifyOtp", verifyOtp);
router.post("/login", loginUser);
// router.post("/forgetPassword", resetPassword);
router.get("/logout", logoutUser);


export default router;