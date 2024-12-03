import { Post } from "../models/Post";
import { Comment } from "../models/Comment";

export const validatePost = (post: Post): string[] => {
  const errors: string[] = [];
  // Check if the title, description, and titleColor are provided
  if (!post.title) errors.push("Title is required");
  if (!post.description) errors.push("Content is required");
  if (!post.titleColor) errors.push("Title color is required");
  return errors;
};

export const validateComment = (comment: Comment): string[] => {
  const errors: string[] = [];
  // Check if the postId and content are provided
  if (!comment.postId) errors.push("PostId is required");
  if (!comment.content) errors.push("Content is required");
  return errors;
};
