import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducer from './reducer';

export const history = createBrowserHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware);
  }
  return applyMiddleware(myRouterMiddleware);
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));
