import { NextFunction, Request, Response } from "express";

const Board = require("../models/BoardModel");

module.exports = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const board = await Board.findById(req.header("boardId"));
  if (!board) {
    return res.status(404).json({ msg: "Board not found" });
  }

  const members = board.members.map((member: any) => member.user);
  if (members.includes(req.user.id)) {
    next();
  } else {
    res
      .status(401)
      .json({ msg: "You must be a member of this board to make changes" });
  }
};
