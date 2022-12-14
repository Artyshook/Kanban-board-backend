import { Request, Response } from "express";
import ListSchema from "../models/ListModel";
import Board from "../models/BoardModel";
import List from "../models/ListModel";

// Add a list
export const createList = async (req: Request, res: Response) => {
  try {
    const boardId = req.body.boardId;

    // Create and save the list
    const doc = new ListSchema({
      title: req.body.title,
    });
    const list = await doc.save();

    // Assign the list to the board
    const board = await Board.findById(boardId);
    board?.lists.push(list.id);
    await board?.save();

    res.json({ listId: list.id, boardId });
  } catch (err) {
    res.status(500).json({
      message: `Server Error`,
    });
  }
};

// Get all of a board's lists
export const getAllLists = async (req: Request, res: Response) => {
  console.log("board id:", req.params.boardId);
  try {
    const board = await Board.findById(req.params.boardId);
    if (!board) {
      return res.status(404).json({ msg: "Board not found" });
    }
    const lists = [];
    for (const listId of board.lists) {
      lists.push(await List.findById(listId));
    }

    res.json(lists);
  } catch (error) {
    res.status(500).json({
      message: `Server Error`,
    });
  }
};

// Get a list by id
export const getListById = async (req: Request, res: Response) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }

    res.json(list);
  } catch (error) {
    res.status(500).json({
      message: `Server Error`,
    });
  }
};

// Edit a list's title
export const renameList = async (req: Request, res: Response) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }

    list.title = req.body.title;
    await list.save();

    res.json(list);
  } catch (error) {
    res.status(500).json({
      message: `Server Error`,
    });
  }
};
