import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StyledPaper = withStyles(({ spacing }) => ({
  root: {
    padding: spacing(1),
    margin: spacing(1),
  },
}))(Paper);

export default ({ ...props }) => <StyledPaper {... props} />;
