import express from 'express';

import { getComments, getComment, createComment } from '../controllers/comment.js';

const router = express.Router();

router.get('/', getComments);
router.post('/', createComment);
router.get('/:id', getComment);

export default router;
