import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import App from './components/app';

const store = configureStore();

class FlexProject extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FlexProject', () => FlexProject);
