import express from "express";
import { connectdb } from "./db/user_db.js";
import userRouter from "./routes/user_routes.js";
import taskRouter from "./routes/task_routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectdb();

app.get("/", (req, res) => {
  res.send("<h1>working nicely</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(
    `server is working at port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
