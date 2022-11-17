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

postRouter.post("/list", checkAuth, postValidation, createTask);
postRouter.delete("/list/:id", checkAuth, deleteTask);
postRouter.patch("/list/:id", checkAuth, postValidation, updateTask);
postRouter.get("/list", getAllTasks);
postRouter.get("/list/:id", getOneTask);

export { postRouter };
