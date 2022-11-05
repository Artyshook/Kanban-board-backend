// type User = {
//     _id: string;
// }
//
// declare global {
//     declare namespace Express{
//         export interface Request{
//             userID:User|undefined
//         }
//     }
// }
import express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: Record<string>
        }
    }
}