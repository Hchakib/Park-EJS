const express = require("express");
const employeecontroller = require("../controllers/employeecontroller");
const Router = express.Router();

Router.route("/")
  .post(employeecontroller.create)
  .get(employeecontroller.getAll);

Router.route("/:id")
  .post(employeecontroller.getById)
  .put(employeecontroller.update)
  .delete(employeecontroller.delete);

module.exports = Router;
