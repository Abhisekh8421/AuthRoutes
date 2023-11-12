import jwt from "jsonwebtoken";

export const sendcookie = (user, res, message, statuscode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  res
    .status(statuscode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({
      success: true,
      message,
    });
};
