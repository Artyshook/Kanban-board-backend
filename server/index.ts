import express from "express";
import * as mongoose from "mongoose";
import cors from "cors";
import { taskRouter } from "./src/routes/TaskRoute";
import { userRouter } from "./src/routes/UserRoute";
import { uploadRouter } from "./src/routes/UploadRoute";
import swagger from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import { boardRouter } from "./src/routes/BoardRoute";
import { listRouter } from "./src/routes/ListRoute";

const app = express();
app.use(express.json());
app.use("/upload", express.static("upload")); //catch GET request to static files
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.use(cors());

const port = 3222;

mongoose
  .connect(
    "mongodb+srv://artyshook:Mkjbhg123@blog.6zl5uyr.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB ERROR", err));

app.use(userRouter);
app.use(taskRouter);
app.use(uploadRouter);
app.use(boardRouter);
app.use(listRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
