const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
    required: [true, "Please enter the name"],
  },

  capacity: {
    type: Number,
    required: [true, "Please enter the capacity"],
  },

  minheight: {
    type: Number,
    required: [true, "Please enter the minHeight"],
  },

  duration: {
    type: Number,
    required: [true, "Please enter the duration"],
  },

  status: {
    type: String,
    required: [true, "Please enter the status"],
  },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = { Ride };
