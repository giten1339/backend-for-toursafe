import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; // Importing JWT verification middleware
const router = Router();

// Routes for registering a new user
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxcount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

// Route for logging in a user
router.route("/login").post(loginUser);

// Secured routes requiring JWT verification
router.route("/logout").post(verifyJWT, logoutUser); // Logout route
router.route("/refresh-token").post(refreshAccessToken); // Refresh token route
router.route("/change-password").post(verifyJWT, changeCurrentPassword); // Change password route
router.route("/current-user").get(verifyJWT, getCurrentUser); // Get current user route
router.route("/update-account").patch(verifyJWT, updateAccountDetails); // Update account route
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar); // Update avatar route
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage); // Update cover image route
router.route("/channel/:username").get(verifyJWT, getUserChannelProfile); // Get user channel profile route
router.route("/history").get(verifyJWT, getWatchHistory); // Get watch history route

// DARK-MODE FEATURE
// router.route("/user/preferences").put(verifyJWT, updateUserPreferences);
// router.route("/user/preferences").put(verifyJWT, getUserPreferences);

export default router;
