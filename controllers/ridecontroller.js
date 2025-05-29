const { Ride } = require("../models/ride");

const rideController = {
  create: async (req, res) => {
    try {
      const { name, capacity, minheight, duration, status } = req.body;

      const validStatuses = ["operational", "maintenance", "closed"];
      if (!validStatuses.includes(status)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid status: ${status}.` });
      }

      const newRide = await Ride.create({
        name,
        capacity,
        minheight,
        duration,
        status,
      });

      res.status(201).json({ success: true, data: newRide });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const rides = await Ride.find();
      res.status(200).json({ success: true, data: rides });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const ride = await Ride.findById(id);

      if (!ride) {
        return res
          .status(404)
          .json({ success: false, message: "Ride not found." });
      }

      res.status(200).json({ success: true, data: ride });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, capacity, minheight, duration, status } = req.body;

      const validStatuses = ["operational", "maintenance", "closed"];
      if (status && !validStatuses.includes(status)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid status: ${status}.` });
      }

      const updatedRide = await Ride.findByIdAndUpdate(
        id,
        { name, capacity, minheight, duration, status },
        { new: true }
      );

      if (!updatedRide) {
        return res
          .status(404)
          .json({ success: false, message: "Ride not found." });
      }

      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: updatedRide,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Ride.findByIdAndDelete(id);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Ride not found." });
      }

      res
        .status(200)
        .json({ success: true, message: "Ride deleted successfully." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = rideController;
