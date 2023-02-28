"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Post_1 = __importDefault(require("../models/Post"));
const createPost = (req, res, next) => {
    const { userId, title, body } = req.body;
    const post = new Post_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        userId,
        title,
        body,
    });
    return post
        .save()
        .then((post) => res.status(201).json({ post }))
        .catch((err) => res.status(500).json({ err }));
};
const getPost = (req, res, next) => {
    const postId = req.params.postId;
    return Post_1.default.findById(postId)
        .then((post) => post
        ? res.status(200).json({ post })
        : res.status(404).json({ message: "Not found" }))
        .catch((err) => res.status(500).json({ err }));
};
const getAllPosts = (req, res, next) => {
    return Post_1.default.find()
        .then((posts) => posts
        ? res.status(200).json({ posts })
        : res.status(404).json({ message: "Not found" }))
        .catch((err) => res.status(500).json({ err }));
};
exports.default = { createPost, getPost, getAllPosts };
