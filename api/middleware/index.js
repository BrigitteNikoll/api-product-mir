import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
  /*    console.log("HEADERS", req.headers) */
    const token = req.headers["authorization"] ? req.headers.split(" ")[1] : "";

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
        console.log("Verify", err, authData);
        if (!err) next()
        else {
            res.status(403).send()
        }
    });
  }
  console.log("TOKEN", token);
};
