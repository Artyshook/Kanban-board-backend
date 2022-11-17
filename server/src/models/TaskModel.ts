import mongoose from "mongoose";

interface IEvent {
  _id: any;
  title: string;
  text: string;
  imageUrl: string;
  category: string;
  user: mongoose.Schema.Types.ObjectId;
}

const TaskSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageUrl: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TaskSchema);
