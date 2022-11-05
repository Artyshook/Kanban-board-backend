import {body} from "express-validator";

export const registrationValidation = [
    body('email', 'Email format is not valid').isEmail(),
    body('password', 'Minimal password length 6 digits').isLength({min: 6}),
    body('fullName', 'Minimal name length 3 digits').isLength({min: 3}),
]
export const loginValidation = [
    body('email','Email format is not valid').isEmail(),
    body('password', 'Minimal password length 6 digits').isLength({min: 6})
]

export const postValidation = [
    body('title', "Minimal title length 3 digits").isLength({min: 6}).isString(),
    body('text', "Minimal text length 6 digits").isLength({min: 6}).isString(),
]

