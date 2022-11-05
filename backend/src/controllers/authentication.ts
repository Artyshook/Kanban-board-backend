import {NextFunction, Response, Request} from "express";
import jwt from 'jsonwebtoken'

interface JwtPayload {
    _id: string
}

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, 'key123') as JwtPayload
            req.user = {_id: decoded._id}
            next()
        } catch (err) {
            return res.status(400).json({
                message: 'No Access'
            })
        }
    } else {
        return res.status(400).json({
            message: 'No Access'
        })
    }
}

