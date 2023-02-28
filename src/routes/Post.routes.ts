import express from "express";
import controller from "../controllers/Post.controller";

const router = express.Router();

router.post("/", controller.createPost);
router.get("/:postId", controller.getPost);
router.get("/", controller.getAllPosts);

export = router;
