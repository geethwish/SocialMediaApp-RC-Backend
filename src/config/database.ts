import loki from "lokijs";

const db = new loki("social-media.db");

// Define the collections
export const Posts = db.addCollection("posts");
export const Comments = db.addCollection("comments");
