import * as NoteUtil from '../utils/note_api_util';

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveProject = (note) => ({
  type: RECEIVE_NOTE,
  note
});

const receiveProjects = notes => ({
  type: RECEIVE_NOTES,
  notes
});

const removeProject = note => ({
  type: REMOVE_NOTE,
  note
});

//need to add thunk action creators
