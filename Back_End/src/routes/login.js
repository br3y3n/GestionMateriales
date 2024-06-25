import { Router } from "express";
import { loginUser } from "../auth/login.js";


const router = Router()
router.post('/',loginUser)
export default router