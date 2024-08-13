// import { Router } from "express";
// import { upload } from "../middlewares/multer.middleware.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

// const router = Router();

// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         }, 
//         {
//             name: "coverImage",
//             maxCount: 1
//         }
//     ]),
//     registerUser
// );

// router.route("/login").post(loginUser);

// // Secured routes
// router.route("/logout").post(verifyJWT, logoutUser);
// router.route("/refresh-token").post(refreshAccessToken);
// router.route("/change-password").post(verifyJWT, changeCurrentPassword);
// router.route("/current-user").get(verifyJWT, getCurrentUser);
// router.route("/update-account").patch(verifyJWT, updateAccountDetails);

// router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
// router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

// router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

// // Delete
// router.route("/history").get(verifyJWT, getWatchHistory);

// export default router; // Ensure this line is present


import { Router } from "express";
import { login, registerUser } from "../controllers/user.controller.js";

const router = Router();

// router.route("/register").post(registerUser)
// router.route("/login").post(login)
router.route("/userRegister").post(registerUser)
router.route("/login").post(login)

export default Router;