import express  from "express"
import * as mongoose from "mongoose";
import cors from 'cors'
import {postRouter} from "./src/routes/PostRoute"
import {userRouter} from "./src/routes/UserRoute";
import {uploadRouter} from "./src/routes/UploadRoute";
import swagger from './swagger.json'
import swaggerUi from 'swagger-ui-express'

const app = express()
app.use(express.json())
app.use('/upload', express.static('upload')) //catch GET request to static files
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))
app.use(cors())

const port = 3222

mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.ttgwg1i.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

app.use(userRouter)
app.use(postRouter)
app.use(uploadRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

