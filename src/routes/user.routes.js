import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router= Router()

router.route("/register").post( registerUser)
//    upload.fields([
//     {
//         name: "avatar",
//         maxcount: 1
//     },
//     {
//         namae: "coverImage",
//         maxCount: 1
//     }
//    ]),
   

export default router