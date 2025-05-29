const express = require("express");
const ticketcontroller = require("../controllers/ticketcontroller");
const Router = express.Router();

Router.route("/").post(ticketcontroller.create).get(ticketcontroller.getAll);

Router.route("/:id")
  .post(ticketcontroller.getById)
  .put(ticketcontroller.update)
  .delete(ticketcontroller.delete);

module.exports = Router;
