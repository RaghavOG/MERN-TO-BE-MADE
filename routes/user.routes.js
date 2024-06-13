import express from 'express';
import {
  deleteUser,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';

import { getUsersForSidebar } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/test', test); //working
router.put('/update/:userId', verifyToken, updateUser); // working
router.delete('/delete/:userId', verifyToken, deleteUser); // working
router.post('/signout', signout);  //working

router.get('/', protectRoute, getUsersForSidebar);

export default router;


// route , uska method , route name and controller name controller me jake function 