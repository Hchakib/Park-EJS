const express = require("express");
const maintenancecontroller = require("../controllers/maintenancecontroller");
const router = express.Router();

router
  .route("/")
  .post(maintenancecontroller.create)
  .get(maintenancecontroller.getAll);

router
  .route("/:id")
  .get(maintenancecontroller.getAll)
  .put(maintenancecontroller.update)
  .delete(maintenancecontroller.delete);

module.exports = router;
