import express from "express";
import { createPost, deletePost, getPosts } from "../controllers/post.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const postRouter = express.Router();

postRouter.post("/", authMiddleware, createPost);
postRouter.get("/", getPosts);
postRouter.delete("/:id", authMiddleware, deletePost);

export default postRouter;