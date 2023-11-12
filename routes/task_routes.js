import express from "express";
import {
  deletetask,
  getMytask,
  newTask,
  updatetask,
} from "../controllers/task_controllers.js";
import { isAuthenticated } from "../middlewares/user_auth.js";
const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMytask);

router
  .route("/:id")
  .delete(isAuthenticated, deletetask)
  .put(isAuthenticated, updatetask);

export default router;
