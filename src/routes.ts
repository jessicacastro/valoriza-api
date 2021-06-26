import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUserSendedComplimentsController } from './controllers/ListUserSendedComplimentsController';
import { ListTagController } from './controllers/ListTagController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();
const listUserReceivedController = new ListUserReceivedComplimentsController();
const listUserSendedController = new ListUserSendedComplimentsController();

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);

router.use(ensureAuthenticated);

router.get("/users", listUsersController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.get("/tags", listTagController.handle);


router.post("/compliments", createComplimentController.handle);
router.get("/compliments/sended", listUserSendedController.handle);
router.get("/compliments/received", listUserReceivedController.handle);


export { router };