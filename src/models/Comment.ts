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
