import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Hello from './containers/Hello';
import { enthusiasm } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { StoreState } from './types';

const store = createStore<StoreState>(
  enthusiasm,
  {
    languageName: 'TypeScript',
    enthusiasmLevel: 1
  },
  // tslint:disable-next-line:no-string-literal
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    // tslint:disable-next-line:no-string-literal
    window['__REDUX_DEVTOOLS_EXTENSION__']()
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
