import { Request, Response } from "express";
import BoardSchema from "../models/BoardModel";
import User from "../models/UserModel";
import Board from "../models/BoardModel";

// Add a board
export const createBoard = async (req: Request, res: Response) => {
  try {
    console.log("user id:", req.user._id);

    // Create and save the board
    const doc = new BoardSchema({
      title: req.body.title,
    });
    const board = await doc.save();

    // Add board to user's boards
    const user = await User.findById(req.user._id);
    if (user) {
      user.boards = [board.id, ...user.boards];
      await user.save();
    }
    res.json(board);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `Board didn't created`,
    });
  }
};

// Get user's boards after log in
export const getUserBoard = async (req: Request, res: Response) => {
  try {
    console.log(req.user.id);
    const user = await User.findById(req.user._id);
    const boards = [];

    for (const boardId of user!.boards) {
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
