import { Posts } from "../config/database";
import { Post } from "../models/Post";
import { v4 as uuidv4 } from "uuid";

// Create a new Post
export const createPost = (post: Post): Post => {
  // Add a unique id and createdAt timestamp to the post
  const newPost = { ...post, id: uuidv4(), createdAt: new Date() };
  return Posts.insert({ ...newPost }) as Post;
};

// Get all Posts
export const getPosts = (): Post[] => {
  return Posts.find() as Post[];
};

// Get a Post by id
export const getPostById = (id: string): Post | null => {
  return Posts.findOne({ id }) as Post | null;
};
