import { Router } from 'express';
import * as RecordingController from './controller';

const routes = Router();

routes.get('/recordings/:recordingId', RecordingController.getRecording);


export default routes;
