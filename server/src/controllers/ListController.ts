import { Request, Response } from "express";
import ListSchema from "../models/TaskModel";

const User = require("../models/UserModel");

export const createList = async (req: Request, res: Response) => {
  try {
    // Create and save the list
    const doc = new ListSchema({
      title: req.body.title,
      user: req.user,
    });
    const list = await doc.save();
    res.json(list);

    // // Assign the list to the user
    // const board = await User.findById();
    // board.lists.push(list.id);
  } catch (err) {
    res.status(500).json({
      message: `Post didn't created`,
    });
  }
};
