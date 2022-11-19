import mongoose from "mongoose";
import { Schema } from "mongoose";

interface IEvent {
  title: string;
  lists: any; //fix
  activity: any; //fix
  // cards: object;
  backgroundURL: string;
  archived: boolean;
  members: any; //fix
  cards: any;
}

const BoardSchema = new mongoose.Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "lists",
      },
    ],
    activity: [
      {
        text: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    backgroundURL: {
      type: String,
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
    //       // required: true,
    //     },
    //     role: {
    //       type: String,
    //       default: "admin",
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Board", BoardSchema);
