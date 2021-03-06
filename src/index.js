import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import App from 'containers/App';
import 'style/app.scss';

const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history);

const rootEl = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('containers/App', () => {
    render();
  });
}
