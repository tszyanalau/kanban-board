import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from '@material-ui/styles';
import { store, history } from './store';
import App from './containers/App';
import theme from './theme';

ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>

), document.getElementById('root'));
