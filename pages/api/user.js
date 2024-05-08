import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const user = async (req, res) => {
  if (req.method === "PUT") {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Data to update can not be empty!" });
    }

    const id = req.query.id;

    await User.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.send({ message: "User was updated successfully!" });
      }
    });
  } else {
    if (req.method === "GET") {
      const id = req.query.id;
      const role = req.query.role;

      if (role) {
        let user = await User.find({ role });
        if (user) {
          res.status(200).json({
            user: user,
          });
        } else {
          res.status(404).json({
            message: "User Not Found!",
          });
        }
      } else if (id) {
        let user = await User.findById(id);
        if (user) {
          res.status(200).json({
            user: user,
          });
        } else {
          res.status(404).json({
            message: "User Not Found!",
          });
        }
      } else {
        let user = await User.find();
        res.status(200).json({
          user: user,
        });
      }
    } else {
      if (req.method === "DELETE") {
        // const id = req.query.id;
        // const role = req.query.role;

        const { id, role } = req.query;

        if (id) {
          await User.findByIdAndDelete(id);
          if (role) {
            let users = await User.find({ role });

            return res.status(200).json({
              users: users,
            });
          } else {
            let users = await User.find();

            return res.status(200).json({
              users: users,
            });
          }
        } else {
          await User.deleteMany();
          let users = await User.find();

          return res.status(200).json({
            users: users,
          });
        }
      } else {
        return res
          .status(422)
          .json({ message: "Request Method Not Supported!" });
      }
    }
  }
};

export default connectDB(user);
