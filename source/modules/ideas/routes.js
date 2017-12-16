import { Router } from 'express';
import * as IdeaController from './controller';

const routes = Router();

routes.get('/ideas/:ideaId', IdeaController.getIdea);
routes.post('/ideas', IdeaController.postIdea);

export default routes;
