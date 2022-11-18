import { Request, Response } from "express";
import TaskSchema from "../models/TaskModel";
import List from "../models/ListModel";
import Task from "../models/TaskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const listId = req.body.listId;
    console.log("add task");

    // Create and save the task
    const doc = new TaskSchema({
      title: req.body.title,
    });
    const task = await doc.save();

    // Assign the task to the list
    const list = await List.findById(listId);
    list?.tasks.push(task.id);
    await list?.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: `Task didn't created`,
    });
  }
};

// Get all of a list's tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const list = await List.findById(req.params.listId);
    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }

    const cards = [];
    for (const cardId of list.tasks) {
      cards.push(await List.findById(cardId));
    }

    res.json(cards);
  } catch (err) {
    res.status(500).json({
      message: `Couldn't find task`,
    });
  }
};

// Get a task by id
export const getOneTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: `Server Error`,
    });
  }
};

//Delete task by id
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
