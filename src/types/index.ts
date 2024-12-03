import { Collection } from "lokijs";

export interface Post {
  id?: string;
  title: string;
  description: string;
  titleColor: string;
  createdAt: Date;
}

export interface Comment {
  id?: string;
  postId: string;
  content: string;
  user: {
    name: string;
    id: string;
    profilePicture: string;
  };
  createdAt: Date;
}

export interface Database {
  posts: Collection<Post>;
  comments: Collection<Comment>;
}
