import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensuraAuthenticated';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle);



export { router };