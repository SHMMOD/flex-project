import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import SessionContainer from './components/session/session_container';

const store = configureStore();


export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <SessionContainer />
      </Provider>
    );
  }
}
