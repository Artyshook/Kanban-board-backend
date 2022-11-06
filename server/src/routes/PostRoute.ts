import {checkAuth} from "../controllers/authentication";
import {postValidation} from "../helpers/validations";
import {createPost, deletePost, getAllPosts, getOnePost, updatePost} from "../controllers/PostController";
import {Router} from "express"

const postRouter = Router()

postRouter.post('/posts',
    checkAuth,
    postValidation,
    createPost)
postRouter.delete('/posts/:id', checkAuth,deletePost)
postRouter.patch('/posts/:id', checkAuth,postValidation,updatePost)
postRouter.get('/posts',getAllPosts)
postRouter.get('/posts/:id', getOnePost)

export {postRouter}