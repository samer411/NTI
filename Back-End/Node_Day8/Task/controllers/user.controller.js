const User = require("../models/user.model");
const appError = require("../utils/appError");
//get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers, { message: "All Found User" });
  } catch (err) {
    appError(err);
  }
};

// get user by id
exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const existUser = await User.findById(id);
    res.status(200).json(existUser);
  } catch (err) {
    appError(err);
  }
};
exports.CreateUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "New User Created Successfully", newUser });
  } catch (err) {
    appError(err);
  }
};

//update user
exports.UpdateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (err) {
    appError(err);
  }
};

//partial update
exports.PartialUpdateUser = async (req, res) => {
  try {
    const partialUpdateUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(partialUpdateUser);
  } catch (err) {
    appError(err);
  }
};
//delete user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    appError(err);
  }
};
//query string filter
exports.filterUsers = async (req, res) => {
  try {
    const filteredUsers = await User.find({ email: req.query.email });
    res.status(200).json(filteredUsers);
  } catch (err) {
    appError(err);
  }
};
