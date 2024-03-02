import multer from "multer";

// Define storage settings for multer
const storage = multer.diskStorage({
    // Set destination folder for uploaded files
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    // Set filename for uploaded files
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Export multer instance with defined storage settings
export const upload = multer({
    storage: storage
});
