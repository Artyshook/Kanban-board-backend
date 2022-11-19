import { checkAuth } from "../controllers/authentication";
import { taskValidation } from "../helpers/validations";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getOneTask,
  updateTask,
} from "../controllers/TaskController";
import { Router } from "express";

const taskRouter = Router();

taskRouter.post("/tasks", checkAuth, taskValidation, createTask);
taskRouter.delete("/tasks/:id", checkAuth, deleteTask);
taskRouter.patch("/tasks/:id", checkAuth, taskValidation, updateTask);
taskRouter.get("/listTasks/:listId", checkAuth, getAllTasks);
taskRouter.get("/tasksById/:id", checkAuth, getOneTask);

export { taskRouter };
