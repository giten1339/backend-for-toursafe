
import express from "express";
import { sendEmergencyAlert } from "../services/emergencyService.js";

const router = express.Router();

// Route for sending emergency alert
router.post("/emergency", async (req, res) => {
    try {
        // Extract user's live location from request body
        const { latitude, longitude } = req.body;

        // Send emergency alert and get response
        const response = await sendEmergencyAlert(latitude, longitude);

        // Send success response
        res.status(200).json({ success: true, message: "Emergency alert sent successfully", response });
    } catch (error) {
        // Handle errors
        console.error("Error sending emergency alert:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

export default router;
