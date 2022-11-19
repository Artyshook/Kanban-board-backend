import mongoose from "mongoose";

interface IEvent {
  _id: any;
  title: string;
  description: string;
  label: string;
  imageUrl: string;
  category: string;
  members: any;
  checklist: string;
  archived: boolean;
  user: mongoose.Schema.Types.ObjectId;
}

const TaskSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    label: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // members: [
    //   {
    //     _id: false,
    //     user: {
    //       type: Schema.Types.ObjectId,
    //       ref: "users",
    //     },
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    checklist: [
      {
        text: {
          type: String,
        },
        complete: {
          type: Boolean,
        },
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
