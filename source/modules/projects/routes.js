import { Router } from 'express';
import * as ProjectController from './controller';

const routes = new Router();

routes.get('/projects/:projectId', ProjectController.getProject);
routes.get('/users/:userId/projects', ProjectController.getProjectsByUser);
routes.post('/projects', ProjectController.postProject);
routes.put('/projects/:projectId', ProjectController.editProject);

export default routes;
