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
  const { id: idUser  } = req.params;
  const user = await User.findById(idUser);
  res.json(user);
  console.log(idUser);idUser
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

export const updateUser = async (req, res) => {
  const { id: idUser } = req.params;
  const userToUpdate = req.body;
  console.log("userToUpdate", userToUpdate);
  const user = await User.findById(idUser);
  console.log("user", user);

  try {
    User.updateOne(user, userToUpdate, (error, updatedUser) => {
      if (!error) {
        res.status(200).json(updatedUser);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteUser = async (req, res) => {
  const { id: idUser } = req.params;

  try {
    const userToDelete = await User.findById(idUser);
    if (!userToDelete)
      res.status(204).json({ error: "No product to delete" });
    const deletedUser = await User.deleteOne(userToDelete);
    if (deletedUser) res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
