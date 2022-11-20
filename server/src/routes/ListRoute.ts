import { checkAuth } from "../controllers/authentication";
import { listValidation } from "../helpers/validations";
import {
  createList,
  getAllLists,
  getListById,
  renameList,
} from "../controllers/ListController";
import { Router } from "express";

const listRouter = Router();

listRouter.post("/list", checkAuth, listValidation, createList);
listRouter.patch("/list/:id", checkAuth, listValidation, renameList);
listRouter.get("/boardLists/:boardId", checkAuth, getAllLists);
listRouter.get("/list/:id", checkAuth, getListById);

export { listRouter };
