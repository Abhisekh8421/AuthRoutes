import User from "../models/user_model.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "user is not found or Login first",
    });
  }

  const decode = jwt.verify(token, process.env.SECRET_KEY);

  req.user = await User.findById(decode._id);
  next();
};
