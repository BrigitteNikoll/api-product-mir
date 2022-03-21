import { User } from "../models/index.js";

// Controller get all user
export const getAllUser = async (request, response) => {
  try {
    const users = await User.find();
    if (users.length === 0) response.status(204).send();
    else response.status(200).json(users);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};

export const getOneUser = async (req, res) => {
  const { id: idUser } = req.params;
  const user = await User.findById(idUser);
  res.json(user);
  console.log(idUser);
};

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    newUser && res.status(201).json(newUser);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};
