import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Heading from '../../components/Heading';

const StyledHeading = withStyles(({ spacing }) => ({
  root: {
    margin: spacing(2),
  },
}))(Heading);

const AppBar = ({ appName, ...props }) => (
  <MuiAppBar {...props}>
    <StyledHeading level={6}>{appName}</StyledHeading>
  </MuiAppBar>
);

export default AppBar;

AppBar.propTypes = {
  appName: PropTypes.string.isRequired,
};
