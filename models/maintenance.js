const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
  id: {
    type: String,
  },

  rideId: {
    type: String,
    required: [true, "Please enter the rideId"],
  },

  employeeId: {
    type: String,
    required: [true, "Please enter the employeeId"],
  },

  date: {
    type: Date,
    required: [true, "Please enter the date"],
  },

  description: {
    type: String,
    required: [true, "Please enter the description"],
  },

  status: {
    type: String,
    required: [true, "Please enter the status"],
  },
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = { Maintenance };
