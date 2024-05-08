import mongoose from "mongoose";

var Schema = mongoose.Schema;

// var schedule = new Schema({
//   consultantId: {
//     type: String,
//     required: false,
//   },
//   appointments: {
//     type: [
//       {
//         consultantId: { type: String },
//         name: { type: String },
//         email: { type: String },
//       },
//     ],
//   },
// });

var schedule = new Schema({
  consultantId: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: false,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

var Schedule = mongoose.model("Schedule", schedule);

export default Schedule;
