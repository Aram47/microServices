import express from 'express';
import middleware from '../middlewares/middleware.js';
import controller from '../controller/controller.js';

const router = express.Router();

router.get('/', middleware.getMiddleware, 
    controller.getController);
    
router.post('/', middleware.postMiddleware, 
    controller.postController);

export default router;