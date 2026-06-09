const User = require("../models/user.model");
// const AppError = require("../utils/appError")
const createToken = require("../utils/tokenCreate");
const AppError = require("../utils/appError");
const appError = require("../utils/appError");
const bcrypt = require('bcryptjs')

exports.register = async (req, res, next) => {
  
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    
    const token = createToken({
      name: newUser.name,
      role: newUser.role,
      id: newUser._id,
    });
    return res.status(201).json({ message: "User Created", user: newUser, token });
  } catch (err) {
    next(appError(err, 400));
  }
};
exports.login = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user)
    console.log(password)
    console.log(user.password)
    const isMatchPassword = await user.comparePassword(password, user.password);
    console.log(isMatchPassword)
    if (!isMatchPassword) {
      return next(new AppError("invalid password", 400));
    }
    const token = createToken({
      name: user.name,
      role: user.role,
      id: user._id,
    });
    res.status(200).json({ message: "login Done", user, token });
  } catch (err) {
    next(appError(err, 400));
  }
};
