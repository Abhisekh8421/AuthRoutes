import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "backendapi",
    })
    .then((c) => {
      console.log(`database connected with ${c.connection.host}`);
    });
};
