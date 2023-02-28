"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Post_controller_1 = __importDefault(require("../controllers/Post.controller"));
const router = express_1.default.Router();
router.post("/", Post_controller_1.default.createPost);
router.get("/:postId", Post_controller_1.default.getPost);
router.get("/", Post_controller_1.default.getAllPosts);
module.exports = router;
