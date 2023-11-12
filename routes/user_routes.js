import express from "express";
import {
  getAllusers,
  getMyprofile,
  login,
  logout,
  register,
} from "../controllers/user_controllers.js";
import { isAuthenticated } from "../middlewares/user_auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/all", getAllusers);

router.get("/me", isAuthenticated, getMyprofile);

export default router;
