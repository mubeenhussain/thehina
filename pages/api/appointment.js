import connectDB from "../../middleware/mongodb";
import Appointment from "../../models/appointment";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testusapp12@gmail.com",
    pass: "Test@123",
  },
});

const appointment = async (req, res) => {
  if (req.method === "POST") {
    const { clientData, consultantData, status, startDate, endDate } = req.body;
    var newAppointment = new Appointment({
      clientData,
      consultantData,
      status: "Pending",
      startDate,
      endDate,
    });
    console.log(newAppointment, "newBookingRequest");
    let date = startDate.split("T", 1);
    let startTime = startDate.split("T").slice(1);
    let endTime = endDate.split("T").slice(1);
    //Create New Appointment
    var appointmentCreated = await newAppointment.save();
    var mailClient = {
      from: "testusapp12@gmail.com",
      //to: "official.farhanbhatti@gmail.com",
      to: clientData.email,
      subject: "Thehina: Appointment",
      html: `<h1>Appointment Request</h1><p>You have requested an appointment on ${date}, from ${startTime} to ${endTime} !</p>`,
    };
    var mailConsultant = {
      from: "testusapp12@gmail.com",
      to: consultantData.email,
      // to: "official.farhanbhatti@gmail.com",
      subject: "Thehina: Appointment",
      html: `<h1>Appointment Request</h1><p>You have an appointment request on ${date}, from ${startTime} to ${endTime} !</p>`,
      // <img src="cid:logo" alt="Logo" width="50%" height="50%"> `,
      // attachments: [
      //   {
      //     filename: "logo.png",
      //     path: "./public/logo.png",
      //     cid: "logo", //my mistake was putting "cid:logo@cid" here!
      //   },
      // ],
    };
    transporter.sendMail(mailClient, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    transporter.sendMail(mailConsultant, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return res.status(200).json({
      Appointment: appointmentCreated,
    });
  } else if (req.method === "GET") {
    const id = req.query.id;
    let appointment = await Appointment.find({
      "consultantData.consultantId": id,
    });
    res.status(200).json({
      Appointments: appointment,
    });
  }
};

export default connectDB(appointment);
