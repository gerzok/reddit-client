import React from 'react';
import ReactDOM from 'react-dom';
import RedditApp from './components/view/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { redditReducer } from './components/state/redditReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  redditReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <RedditApp />
  </Provider>,
  document.getElementById('root')
);