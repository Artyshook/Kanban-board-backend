import mongoose from "mongoose";
import { Schema } from "mongoose";

interface IEvent {
  title: string;
  cards: object;
  archived: boolean;
}

const TaskSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "cards",
      },
    ],
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TaskSchema);
