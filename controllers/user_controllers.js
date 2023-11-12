import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import { sendcookie } from "../utils/user_utils.js";

export const getAllusers = async (req, res) => {
  const user = await User.find({});
  res.status(400).json({
    success: true,
    user,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.json({
      success: false,
      message: "Register first",
    });
  }

  const encrypted = await bcrypt.compare(password, user.password);
  if (!encrypted) {
    return res.json({
      success: false,
      message: "your password is incorrect",
    });
  }

  sendcookie(user, res, `welcome back,${user.name}`, 201);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "user already exists",
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedpassword });

  sendcookie(user, res, "successfully registered", 201);
};

export const getMyprofile = async (req, res) => {
  // 2nd method by {Abhisekhsuru}
  // const { id } = req.query;
  // const user = await User.findById(id);
  //without authentication

  res.status(200).json({
    success: true,
    message: `your profile is found ${req.user.name}`,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message: "Successfully logout",
      user: req.user,
    });
};
