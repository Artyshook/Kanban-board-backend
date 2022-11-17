import { Request, Response } from "express";
import TaskSchema from "../models/TaskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    console.log("here");
    const doc = new TaskSchema({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      user: req.user,
    });
    const task = await doc.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: `Post didn't created`,
    });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskSchema.find().populate("user").exec();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: `Couldn't find task`,
    });
  }
};
export const getOneTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    console.log("ssss");

    const oneTask = await TaskSchema.findById({ _id: taskId });
    if (!oneTask) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    res.json(oneTask);
  } catch (err) {
    res.status(500).json({
      message: `Couldn't find post`,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    const oneTask = await TaskSchema.findOneAndDelete({ _id: taskId });
    if (!oneTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't find task`,
    });
  }
};

// export const changeOrderPost = async (req: Request, res: Response) => {
//   try {
//     const SourceIndex = req.params.start;
//     const DestinationIndex = req.params.end;
//
//     const onePost = await PostSchema.findOneAndDelete({ _id: postId });
//     if (!onePost) {
//       return res.status(404).json({
//         message: "Post not found",
//       });
//     }
//     res.json({
//       success: true,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: `Couldn't find post`,
//     });
//   }
// };

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;

    const updatedPosts = await TaskSchema.updateOne(
      { _id: taskId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.user,
      }
    );
    if (!updatedPosts) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: `Couldn't update post`,
    });
  }
};
