import { Router } from 'express';
import {
    getUsers,
    createUser,
    loginUser,
} from '../../controllers/UserController.js';

const router = Router();

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get().put().delete();

// /api/users/Login
router.post('/login', loginUser);


export default router;