import multer from "multer";
import path from "path";
import {v1} from "uuid";
import {Request, Response} from "express";

import {Router} from "express"
const uploadRouter = Router()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('./upload/'))
    },
    filename: (req, file, callback) => {
        callback(null, `${v1()}-${file.originalname}`);
    }
});
const upload =multer({storage})

uploadRouter.post('/upload' ,upload.single('image'),(req:Request,res:Response)=>{
    res.json({
        url:`/upload/${req.file?.originalname}`
    })
})

export {uploadRouter}