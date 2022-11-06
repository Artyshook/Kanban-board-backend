import {loginValidation, registrationValidation} from "../helpers/validations";
import {login, register, userInfo} from "../controllers/UserController";
import {checkAuth} from "../controllers/authentication";

import {Router} from "express"
const userRouter = Router()

userRouter.post(
    '/auth/register',
    registrationValidation,
    register
);
userRouter.post('/auth/login',
    loginValidation,
    login)
userRouter.get('/auth/me',checkAuth,userInfo)

export {userRouter}