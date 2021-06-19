/* import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';

import css from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      {<PersistGate loading={null} persistor={store.persistor}>}
        <App className = {css}/>
      {</PersistGate>}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
