import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// import UserRoutes from './modules';
import { UserRoutes, ProjectRoutes, NoteRoutes, RecordingRoutes } from './modules/index';

const app = express();


// database
let mongoURI;

if (process.env.MONGO_URI) {
  mongoURI = process.env.MONGO_URI;
} else {
  const keys = require('./config/keys');
  mongoURI = keys.mongoURI;
}

mongoose.connect(mongoURI);


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// routes
app.use('/api', [UserRoutes, ProjectRoutes, NoteRoutes, RecordingRoutes]);


const PORT = process.env.PORT || 5000;
console.log(`listening on ${PORT}`);
app.listen(PORT);
