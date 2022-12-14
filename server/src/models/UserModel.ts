import * as mongoose from "mongoose";
// const { Schema } = require("mongoose");

interface MongoResult {
  _doc: any;
}
interface IEvent extends MongoResult {
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl: string;
  boards: any[];
}

const UserSchema = new mongoose.Schema<IEvent>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: "String",
    },
    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "boards",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEvent>("User", UserSchema);
