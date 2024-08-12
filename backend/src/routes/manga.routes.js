// import { Router } from 'express';
// import {
//     deleteManga,
//     getAllMangas,
//     getMangaById,
//     publishAManga,
//     togglePublishStatus,
//     updateManga,
// } from "../controllers/manga.controller.js"
// import {verifyJWT} from "../middlewares/auth.middleware.js"
// import {upload} from "../middlewares/multer.middleware.js"

// const router = Router();
// router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

// router
//     .route("/")
//     .get(getAllMangas)
//     .post(
//         upload.fields([
//             {
//                 name: "MangaFile",
//                 maxCount: 1,
//             },
//             {
//                 name: "thumbnail",
//                 maxCount: 1,
//             },
            
//         ]),
//         publishAManga
//     );

// router
//     .route("/:mangaId")
//     .get(getMangaById)
//     .delete(deleteManga)
//     .patch(upload.single("thumbnail"), updateManga);

// router.route("/toggle/publish/:MangaId").patch(togglePublishStatus);

// export default router