/* import { User } from "../models/index.js"; */


const username = "Bri"
const password = "1236"

export const login = async (req, res) => { 

    const { username: userLog, password: passLog } = req.body;

    if (username === userLog && password === passLog) {
        res.status(200).json({token: true})
    } else {
        res.status(403).send();
    }
}