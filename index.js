import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './configureStore'

const store = configureStore()

const rnredux = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

AppRegistry.registerComponent('rnredux', () => rnredux);
