import express from 'express';
import authorize from '../middleware/authorise.middleware.js';
import { auth } from '../middleware/auth.middleware.js';
import { getProfile } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/create", auth, authorize('create'), getProfile)
router.get("/read", auth, authorize('read'), getProfile)

export default router;