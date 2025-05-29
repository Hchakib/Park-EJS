const { Employee } = require("../models/employee");

const employeeController = {
  create: async (req, res) => {
    try {
      const { name, position, department } = req.body;

      const newEmployee = await Employee.create({ name, position, department });

      res.status(201).json({ success: true, data: newEmployee });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json({ success: true, data: employees });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id);

      if (!employee) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found." });
      }

      res.status(200).json({ success: true, data: employee });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, position, department } = req.body;

      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, position, department },
        { new: true }
      );

      if (!updatedEmployee) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found." });
      }

      res
        .status(200)
        .json({
          success: true,
          message: "Successfully updated",
          data: updatedEmployee,
        });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Employee.findByIdAndDelete(id);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found." });
      }

      res
        .status(200)
        .json({ success: true, message: "Employee deleted successfully." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = employeeController;
