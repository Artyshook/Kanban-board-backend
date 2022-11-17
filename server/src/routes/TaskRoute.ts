import { checkAuth } from "../controllers/authentication";
import { postValidation } from "../helpers/validations";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from "../controllers/TaskController";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/tasks", checkAuth, postValidation, createTask);
postRouter.delete("/tasks/:id", checkAuth, deleteTask);
postRouter.patch("/tasks/:id", checkAuth, postValidation, updateTask);
postRouter.get("/tasks", getAllTasks);
postRouter.get("/tasks/:id", getOneTask);

export { postRouter };
