const express = require("express");
const ridecontroller = require("../controllers/ridecontroller");
const router = express.Router();

router.route("/").post(ridecontroller.create).get(ridecontroller.getAll);

router
  .route("/:id")
  .get(ridecontroller.getAll)
  .put(ridecontroller.update)
  .delete(ridecontroller.delete);

module.exports = router;
