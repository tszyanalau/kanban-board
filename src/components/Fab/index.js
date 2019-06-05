import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ spacing }) => ({
  root: {
    marginRight: spacing(1),
    marginBottom: spacing(1),
    textTransform: 'none',
  },
});

const FloatingActionButton = ({ children, ...props }) => (<Fab {...props}>{children}</Fab>);

FloatingActionButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  color: 'secondary',
  size: 'medium',
};

export default withStyles(styles)(FloatingActionButton);
