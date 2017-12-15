import { Router } from 'express';
import * as ProjectController from './controller';

const routes = new Router();

// routes.get('/users', ProjectController.getAllUsers);
// routes.post('/users', ProjectController.createUser);
// routes.post('/users/auth0', ProjectController.loginWithAuth0);
// routes.get('/users/seed', ProjectController.seedEvents);

routes.get('/projects/:projectId', ProjectController.getProject);
// routes.put('/users/:userId', ProjectController.updateUser);

export default routes;
