import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "user_images", // Specify folder in Cloudinary
        allowed_formats: ["jpg", "jpeg", "png"], // Restrict to image formats
    },
});

const upload = multer({ storage });

export default upload;
