import { Router } from 'express';
import * as IdeaController from './controller';

const routes = Router();

routes.get('/ideas/:ideaId', IdeaController.getIdea);
routes.post('/ideas', IdeaController.postIdea);
routes.put('/ideas/:ideaId', IdeaController.editIdea);

export default routes;
