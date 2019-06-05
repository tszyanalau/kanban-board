import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { lifecycle, compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import KanbanBoard from '../../page/KanbanBoard';
import NotFound from '../../page/NotFound';
import AppBar from './AppBar';
import { store } from '../../store';
import { loadApp, redirect } from '../../reducers/global/actions';

const mapStateToProps = ({ global: { appLoaded, redirectTo, appName } }) => ({
  appLoaded,
  redirectTo,
  appName,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(loadApp()),
  onRedirect: () => dispatch(redirect()),
});

const StyledGrid = withStyles(({ breakpoints, spacing }) => ({
  root: {
    paddingTop: spacing(10),
    [breakpoints.down('md')]: {
      paddingTop: spacing(8),
    },
  },
}))(Grid);

const App = ({ appLoaded, appName }) => {
  if (appLoaded) {
    return (
      <div>
        <AppBar appName={appName} />
        <StyledGrid>
          <Switch>
            <Route exact path="/" component={KanbanBoard} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </StyledGrid>
      </div>
    );
  }
  return (
    <LinearProgress />
  );
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.onLoad();
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.redirectTo) {
        store.dispatch(push(nextProps.redirectTo));
        this.props.onRedirect();
      }
    },
  }),
);

App.propTypes = {
  appLoaded: PropTypes.bool,
  appName: PropTypes.string,
};

export default enhance(App);
