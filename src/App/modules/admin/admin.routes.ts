import express from 'express';
import auth from '../../middlewares/auth';
import { userControllers } from '../user/user.controller';

const router = express.Router();

// route to block user by admin
router.patch(
  '/users/:userId/block',
  auth('admin'),
  userControllers.blockUser,
)

export const adminRoutes = router;