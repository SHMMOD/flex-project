import { Router } from 'express';
import * as NoteController from './controller';

const routes = Router();

routes.get('/notes/:noteId', NoteController.getNote);


export default routes;
