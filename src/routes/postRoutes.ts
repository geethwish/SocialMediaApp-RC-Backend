import express from "express";
import * as postController from "../controllers/postController";

const router = express.Router();

router.post("/", postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);

export default router;
