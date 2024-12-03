import { Comments } from "../config/database";
import { Comment } from "../models/Comment";
import { v4 as uuidv4 } from "uuid";

// Create a new comment
export const createComment = (comment: Comment): Comment => {
  const newComment = { ...comment, id: uuidv4(), createdAt: new Date() };
  console.log(comment.user);

  // If the user is not defined, set a default user
  if (comment.user === undefined || comment.user === null) {
    newComment.user = {
      id: "1",
      name: "John Smith",
      profilePicture: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    };
  }
  return Comments.insert({ ...newComment, createdAt: new Date() }) as Comment;
};

// Get all comments by relevant post id
export const getCommentsByPostId = (postId: string): Comment[] => {
  return Comments.find({ postId }) as Comment[];
};
