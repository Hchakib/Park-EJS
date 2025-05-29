const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
    required: [true, "Please enter the name"],
  },

  position: {
    type: String,
    required: [true, "Please enter the position"],
  },

  department: {
    type: String,
    required: [true, "Please enter the department"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };
