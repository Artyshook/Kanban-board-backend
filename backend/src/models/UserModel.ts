import * as mongoose from "mongoose";

interface MongoResult {
    _doc: any
}
interface IEvent  extends MongoResult {
    _id: any
    fullName: string
    email: string
    passwordHash: string
    avatarUrl: string
}


const UserSchema = new mongoose.Schema<IEvent>({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    passwordHash :{
        type:String,
        required:true,
    },
    avatarUrl:String,
},{
    timestamps:true,
    }
)

export default mongoose.model ('User', UserSchema)