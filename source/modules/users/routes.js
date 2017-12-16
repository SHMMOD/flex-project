import { Router } from 'express';
import * as UserController from './controller';

const routes = Router();

// routes.get('/users', UserController.getAllUsers);
// routes.post('/users', UserController.createUser);
// routes.get('/users/seed', UserController.seedEvents);

routes.get('/users/:userId', UserController.getUser);
// routes.get('/users/:usersId/projects', UserController.); 
// routes.put('/users/:userId', UserController.updateUser);

export default routes;
