import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const styles = ({ spacing }) => ({
  root: {
    marginRight: spacing(1),
    marginBottom: spacing(1),
    textTransform: 'none',
  },
});

const Button = ({ children, ...props }) => (<MuiButton {...props}>{children}</MuiButton>);

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default withStyles(styles)(Button);
