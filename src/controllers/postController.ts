// FILE: postController.ts
import { Request, Response } from "express";
import * as postService from "../services/postService";
import { validatePost } from "../utils/validator";

// Create a new post
export const createPost = (req: Request, res: Response): Response | any => {
  // Validate the request body
  const errors = validatePost(req.body);
  if (errors.length > 0) {
    // If there are errors, return 400 (Bad Request) with the errors
    return res.status(400).json({ errors });
  }

  // If the request body is valid, create a new post
  const post = postService.createPost(req.body);

  // return newly created post with 201 (Created) status code
  return res.status(201).json(post);
};

// Get all posts
export const getPosts = (_req: Request, res: Response): Response | any => {
  const posts = postService.getPosts();
  return res.json(posts);
};

// Get a post by post id
export const getPostById = (req: Request, res: Response): Response | any => {
  const post = postService.getPostById(req.params.id);

  // If post is not found, return 404 (Not Found)
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.json(post);
};
