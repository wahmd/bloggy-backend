import express from "express";
import controller from "../controllers/Post.controller";

const router = express.Router();

router.post("/create", controller.createPost);
router.get("/get:postId", controller.getPost);
router.get("/get", controller.getAllPosts);

export = router;
