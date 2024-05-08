import connectDB from "../../middleware/mongodb";
import Schedule from "../../models/schedule";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schedule = async (req, res) => {
  if (req.method === "POST") {
    const { consultantId, subject, startDate, endDate } = req.body;

    try {
      var newSchedule = new Schedule({
        consultantId,
        subject,
        startDate,
        endDate,
      });
      console.log("newSchedule :", newSchedule);
      //Create New User
      var schedulecreated = await newSchedule.save();
      console.log(schedulecreated, "usercreated");
      let schedule = await Schedule.find({ consultantId });

      return res.status(200).json({
        schedule,
      });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  } else if (req.method === "GET") {
    const consultantId = req.query.consultantId;

    try {
      let schedule = await Schedule.find({ consultantId });
      if (schedule) {
        res.status(200).json({
          schedule: schedule,
        });
      } else {
        res.status(404).json({
          message: "Data Not Found!",
        });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
  }
};

export default connectDB(schedule);
