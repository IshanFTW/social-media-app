import express from 'express';
import * as postController from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, postController.createPost);
router.get('/', protect, postController.getPosts);
router.post('/:id/like', protect, postController.likePost);
router.post('/:id/comments', protect, postController.commentPost);

export default router; 