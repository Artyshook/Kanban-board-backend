import mongoose from "mongoose";

interface IEvent {
  title: string;
  tasks: any;
  archived: boolean;
}

const ListSchema = new mongoose.Schema<IEvent>({
  title: {
    type: String,
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
    },
  ],
  archived: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model("List", ListSchema);
