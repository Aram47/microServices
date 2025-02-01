import express from 'express';
import middleware from '../middlewares/middleware.js';

const router = express.Router();

router.get('/', middleware.getMiddleware);
router.post('/', middleware.postMiddleware);

export default router;