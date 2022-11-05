import mongoose from "mongoose";

interface IEvent {
    _id: any
    title: string
    text: string
    imageUrl: string
    user: mongoose.Schema.Types.ObjectId
}

const PostSchema = new mongoose.Schema<IEvent>({
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
        },
        imageUrl: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    }, {
        timestamps: true,
    }
)

export default mongoose.model('Post', PostSchema)