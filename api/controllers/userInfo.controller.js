import { UserInfo } from "../models/index.js";

// Controller get all user
export const getAllUserInfo = async (request, response) => {
  try {
    const usersInfo = await UserInfo.find();
    if (usersInfo.length === 0) response.status(204).send();
    else response.status(200).json(usersInfo);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};

export const getOneUserInfo = async (req, res) => {
  const { id: idUserInfo  } = req.params;
  const userInfo = await UserInfo.findById(idUserInfo);
  res.json(userInfo);
  console.log(idUserInfo);
};

export const createUserInfo = async (req, res) => {
  try {
    const userinfo = new UserInfo(req.body);
    const newUserInfo = await userinfo.save();
    newUserInfo && res.status(201).json(newUserInfo);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};

export const updateUserInfo = async (req, res) => {
  const { id: idUserInfo } = req.params;
  const userInfoToUpdate = req.body;
  console.log("userInfoToUpdate", userInfoToUpdate);
  const userInfo = await UserInfo.findById(idUserInfo);
  console.log("userInfo", userInfo);

  try {
    UserInfo.updateOne(userInfo, userInfoToUpdate, (error, updatedUserInfo) => {
      if (!error) {
        res.status(200).json(updatedUserInfo);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

export const deleteUserInfo = async (req, res) => {
  const { id: idUserInfo } = req.params;

  try {
    const userInfoToDelete = await UserInfo.findById(idUserInfo);
    if (!userInfoToDelete)
      res.status(204).json({ error: "No product to delete" });
    const deleteInfodUser = await UserInfo.deleteOne(userInfoToDelete);
    if (deleteInfodUser) res.status(200).json(deleteInfodUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
