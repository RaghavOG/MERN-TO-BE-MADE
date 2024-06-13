import express from 'express';
import { signup, signin, google } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/signup', signup); //working
router.post('/signin', signin); //working
router.post('/google', google); //working



export default router;