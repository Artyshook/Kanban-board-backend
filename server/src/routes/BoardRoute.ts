import { checkAuth } from "../controllers/authentication";
import { boardValidation } from "../helpers/validations";
import {
  createBoard,
  getUserBoard,
  getBordByID,
} from "../controllers/BoardController";
import { Router } from "express";

const boardRouter = Router();

boardRouter.post("/board", checkAuth, boardValidation, createBoard);
boardRouter.get("/board", checkAuth, getUserBoard);
boardRouter.get("/board/:id", checkAuth, getBordByID);

export { boardRouter };
