import * as RecordingUtil from '../utils/recording_api_util';

export const RECEIVE_RECORDING = 'RECEIVE_RECORDING';
export const RECEIVE_RECORDINGS = 'RECEIVE_RECORDINGS';
export const REMOVE_RECORDING = 'REMOVE_RECORDING';

const receiveRecording = (recording) => ({
  type: RECEIVE_RECORDING,
  recording
});

const receiveRecordings = recordings => ({
  type: RECEIVE_RECORDINGS,
  recordings
});

const removeRecording = recording => ({
  type: REMOVE_RECORDING,
  recording
});

//need to add thunk action creators
