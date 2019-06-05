import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '.';
import Icon from '../Icon';

const StyledIcon = withStyles(({ spacing }) => ({
  root: {
    marginRight: spacing(1),
  },
}))(Icon);

storiesOf('Atoms|Fab', module)
  .add('round', () => (
    <div>
      <Fab color="primary" size="small"><Icon name="add" /></Fab>
      <Fab><Icon name="delete" /></Fab>
      <Fab size="large" color="default"><Icon name="edit" /></Fab>
    </div>
  ))
  .add('extended', () => (
    <Fab variant="extended">
      <StyledIcon name="navigation" fontSize="small" />
      Extended
    </Fab>
  ));
