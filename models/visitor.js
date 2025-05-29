const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
    required: [true, "Please enter the name"],
  },

  age: {
    type: Number,
    required: [true, "Please enter the age"],
  },

  height: {
    type: Number,
    required: [true, "Please enter the height"],
  },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = { Visitor };
