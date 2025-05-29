const { Ticket } = require("../models/ticket");

const ticketController = {
  create: async (req, res) => {
    try {
      const { visitorId, type, price, purchaseDate, validUntil } = req.body;

      const validTypes = ["day", "season", "vip"];
      if (!validTypes.includes(type)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid type: ${type}.` });
      }

      const newTicket = await Ticket.create({
        visitorId,
        type,
        price,
        purchaseDate: new Date(purchaseDate),
        validUntil: new Date(validUntil),
      });

      res.status(201).json({ success: true, data: newTicket });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const tickets = await Ticket.find();
      res.status(200).json({ success: true, data: tickets });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findById(id);

      if (!ticket) {
        return res
          .status(404)
          .json({ success: false, message: "Ticket not found." });
      }

      res.status(200).json({ success: true, data: ticket });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { visitorId, type, price, purchaseDate, validUntil } = req.body;

      const validTypes = ["day", "season", "vip"];
      if (type && !validTypes.includes(type)) {
        return res
          .status(400)
          .json({ success: false, message: `Invalid type: ${type}.` });
      }

      const updatedTicket = await Ticket.findByIdAndUpdate(
        id,
        {
          visitorId,
          type,
          price,
          purchaseDate: purchaseDate ? new Date(purchaseDate) : undefined,
          validUntil: validUntil ? new Date(validUntil) : undefined,
        },
        { new: true }
      );

      if (!updatedTicket) {
        return res
          .status(404)
          .json({ success: false, message: "Ticket not found." });
      }

      res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: updatedTicket,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // Suppression d'un ticket
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Ticket.findByIdAndDelete(id);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Ticket not found." });
      }

      res
        .status(200)
        .json({ success: true, message: "Ticket deleted successfully." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};

module.exports = ticketController;
