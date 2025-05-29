const { Maintenance } = require("../models/maintenance");

const maintenanceController = {
  create: async (req, res) => {
    try {
      const { rideId, employeeId, date, description, status } = req.body;

      const validStatuses = ["scheduled", "in-progress", "completed"];
      if (!validStatuses.includes(status)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid status: ${status}.` });
      }

      const newMaintenance = await Maintenance.create({
        rideId,
        employeeId,
        date: new Date(date),
        description,
        status,
      });

      res.status(201).json({ success: true, data: newMaintenance });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const maintenances = await Maintenance.find();
      res.status(200).json({ success: true, data: maintenances });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const maintenance = await Maintenance.findById(id);

      if (!maintenance) {
        return res
          .status(404)
          .json({ success: false, message: "Maintenance not found." });
      }

      res.status(200).json({ success: true, data: maintenance });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { rideId, employeeId, date, description, status } = req.body;

      const validStatuses = ["scheduled", "in-progress", "completed"];
      if (status && !validStatuses.includes(status)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid status: ${status}.` });
      }

      const updatedMaintenance = await Maintenance.findByIdAndUpdate(
        id,
        {
          rideId,
          employeeId,
          date: date ? new Date(date) : undefined,
          description,
          status,
        },
        { new: true }
      );

      if (!updatedMaintenance) {
        return res
          .status(404)
          .json({ success: false, message: "Maintenance not found." });
      }

      res
        .status(200)
        .json({
          success: true,
          message: "Successfully updated",
          data: updatedMaintenance,
        });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Maintenance.findByIdAndDelete(id);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Maintenance not found." });
      }

      res
        .status(200)
        .json({ success: true, message: "Maintenance deleted successfully." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = maintenanceController;
