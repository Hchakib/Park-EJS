const express = require("express");
const visitorcontroller = require("../controllers/visitorcontroller");
const Router = express.Router();

Router.route("/").post(visitorcontroller.create).get(visitorcontroller.getAll);

Router.route("/:id")
  .post(visitorcontroller.getById)
  .put(visitorcontroller.update)
  .delete(visitorcontroller.delete);

module.exports = Router;
