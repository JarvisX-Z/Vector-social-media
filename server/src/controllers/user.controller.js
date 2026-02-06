import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const uploadAvatar = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: "avatars",
            transformation: [
                { width: 300, height: 300, crop: "fill" },
                { quality: "auto" },
            ],
        });
        const user = await User.findById(req.user.id);
        user.avatar = uploadResult.secure_url;
        await user.save();
        res.status(200).json({
            success: true,
            avatar: user.avatar,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
