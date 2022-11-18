import { Request, Response } from "express";
import BoardSchema from "../models/BoardModel";

const User = require("../models/UserModel");
const Board = require("../models/BoardModel");

// Add a board
export const createBoard = async (req: Request, res: Response) => {
  try {
    // Create and save the board
    const doc = new BoardSchema({
      title: req.body.title,
      backgroundURL: req.body.backgroundURL,
    });
    const board = await doc.save();
    res.json(board);

    // Add board to user's boards
    const user = await User.findById(req.user.id);
    user.boards.unshift(board.id);
    await user.save();
  } catch (err) {
    res.status(500).json({
      message: `Post didn't created`,
    });
  }
};

// Get user's boards after log in
export const getUserBoard = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    const boards = [];

    for (const boardId of user.boards) {
      boards.push(await Board.findById(boardId));
    }
    res.json(boards);
  } catch (error) {
    res.status(500).json({
      message: `Can't get user's boards `,
    });
  }
};

// Get a board by id
export const getBordByID = async (req: Request, res: Response) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ msg: "Board not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: `Can't get find board`,
    });
  }
};
