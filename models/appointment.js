import mongoose from "mongoose";

var Schema = mongoose.Schema;

var appointment = new Schema({
  clientData: {
    clientId: { type: String },
    name: { type: String },
    email: { type: String },
  },
  consultantData: {
    consultantId: { type: String },
    name: { type: String },
    email: { type: String },
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
});

mongoose.models = {};

var Appointment = mongoose.model("Appointment", appointment);

export default Appointment;
