const { Visitor } = require("../models/visitor");

const visitorcontroller = {
  create: async (req, res) => {
    try {
      const visitor = await Visitor.create(req.body);
      res.status(201).json({ success: true, data: visitor });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const visitors = await Visitor.find();
      res.status(200).json({ success: true, data: visitors });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const visitor = await Visitor.findById(id);

      if (!visitor) {
        return res
          .status(404)
          .json({ success: false, message: "Visitor not found" });
      }

      res.status(200).json({ success: true, data: visitor });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedVisitor = await Visitor.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedVisitor) {
        return res
          .status(404)
          .json({ success: false, message: "Visitor not found" });
      }

      res
        .status(200)
        .json({
          success: true,
          message: "Successfully Updated",
          data: updatedVisitor,
        });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Visitor.findByIdAndDelete(id);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Visitor not found" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = visitorcontroller;
