/* import { User } from "../models/index.js"; */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const username = "Bri";
const password = "1236";

export const login = async (req, res) => {
  const { username: userLog, password: passLog } = req.body;

  //Mockeando DB
  const userDb = {
    id: "5465d4564-561",
    name: "Brigitte",
  };

  if (username === userLog && password === passLog) {
    //JWT
    jwt.sign(
      userDb,
      process.env.SECRET_KEY,
      { expiresIn: "32s" },
      (error, token) => {
        if (!error) {
          res.status(200).json({
            token,
          });
        } else {
          res.status(403).send();
        }
      }
    );
  } else {
    res.status(403).send();
  }
};

export const createUser = async (req, res) => { 
  const { password, document } = req.body;
  console.log("password", password);
  
  const passToHash = `${password}${document}`
  let hash = await bcrypt.hash(passToHash, 10);
  console.log({...req.body, password: hash})


  //login
/*   bcrypt.compare(password, hash, (err, result) => {
    console.log("COMPARE", err, result);
  }); */
}