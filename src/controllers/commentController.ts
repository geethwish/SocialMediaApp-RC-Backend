import { Request, Response } from "express";
import * as commentService from "../services/commentService";
import { validateComment } from "../utils/validator";

export const createComment = (req: Request, res: Response): Response | any => {
  const errors = validateComment(req.body);
  // If there are validation errors, return a 400 response
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // Create a new comment
  const comment = commentService.createComment(req.body);

  // Return the new comment with a 201 response
  return res.status(201).json(comment);
};

// Get comments by post id
export const getCommentsByPostId = (
  req: Request,
  res: Response
): Response | any => {
  const comments = commentService.getCommentsByPostId(req.params.postId);
  return res.json(comments);
};
