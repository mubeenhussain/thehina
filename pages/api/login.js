import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (email && password) {
      let user = await User.findOne({ email });
      if (user) {
        let passwordCheck = bcrypt.compareSync(password, user.password);
        console.log("Password: ", passwordCheck);
        if (passwordCheck) {
          return res.status(200).json({
            token: jwt.sign(
              {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
              },
              process.env.jwtKey
            ),
            role: user.role,
          });
        } else {
          return res.status(403).json({ error: "Incorrect Email or Password" });
        }
      } else {
        return res.status(422).json({ errors: "User Not Found!" });
        // return res.status(422).j;
      }
    } else {
      return res.status(422).json({ message: "Data Incomplete!" });
    }
  } else {
    return res.status(422).json({ message: "Request Method Not Supported!" });
  }
};

export default connectDB(login);
