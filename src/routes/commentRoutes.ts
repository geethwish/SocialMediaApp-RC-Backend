import express from "express";
import * as commentController from "../controllers/commentController";

const router = express.Router();

router.post("/", commentController.createComment);
router.get("/post/:postId", commentController.getCommentsByPostId);

export default router;
