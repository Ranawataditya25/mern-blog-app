import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({});
const upload = multer({ storage });

// File size limit: 2 MB
const MAX_SIZE_MB = 2;

// Upload route
router.post("/upload", upload.single("image"), async (req, res) => {
    try {
        // Validate file size
        if (req.file.size > MAX_SIZE_MB * 1024 * 1024) {
            return res.status(400).json({ success: false, message: "File size exceeds 2 MB limit" });
        }

        // Validate file type
        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({ success: false, message: "Invalid file type. Only images are allowed." });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "blog_images", // Optional: organize files in a specific folder
        });

        res.status(200).json({ success: true, url: result.secure_url });
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        res.status(500).json({ success: false, message: "Upload failed", error });
    }
});

export default router;
