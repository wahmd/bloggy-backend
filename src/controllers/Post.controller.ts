import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Post from "../models/Post";

const createPost = (req: Request, res: Response, next: NextFunction) => {
  const { userId, title, body } = req.body;

  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    userId,
    title,
    body,
  });

  return post
    .save()
    .then((post) => res.status(201).json({ post }))
    .catch((err) => res.status(500).json({ err }));
};

const getPost = (req: Request, res: Response, next: NextFunction) => {
  const postId = req.params.postId;
  return Post.findById(postId)
    .then((post) =>
      post
        ? res.status(200).json({ post })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((err) => res.status(500).json({ err }));
};

const getAllPosts = (req: Request, res: Response, next: NextFunction) => {
  return Post.find()
    .then((posts) =>
      posts
        ? res.status(200).json({ posts })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((err) => res.status(500).json({ err }));
};

export default { createPost, getPost, getAllPosts };
