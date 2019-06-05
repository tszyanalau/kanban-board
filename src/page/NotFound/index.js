import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Heading from '../../components/Heading';

const StyledGrid = withStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(4),
  },
}))(Grid);

const NotFound = () => (
  <StyledGrid container wrap="wrap" justify="center">
    <Heading>Page not found</Heading>
  </StyledGrid>
);

export default NotFound;
