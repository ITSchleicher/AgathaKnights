import { Router } from 'express';
import {
    getUsers,
    createUser,
} from '../../controllers/UserController.js';

const router = Router();

// /api/users
router.route('/').get(getUsers).post(createUser);


export default router;