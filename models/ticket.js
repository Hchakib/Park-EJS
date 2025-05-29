const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  id: {
    type: String,
  },

  visitorId: {
    type: String,
    required: [true, "Please enter the visitorId"],
  },

  type: {
    type: String,
    required: [true, "Please enter the type"],
  },

  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },

  purchaseDate: {
    type: Date,
    required: [true, "Please enter the purchaseDate"],
  },

  validUntil: {
    type: Date,
    required: [true, "Please enter the validUntil"],
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = { Ticket };
