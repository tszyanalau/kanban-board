import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core/styles';
import Icon from '.';

const StyledIcon = withStyles(({ spacing }) => ({
  root: {
    marginRight: spacing(1),
  },
}))(Icon);

storiesOf('Atoms|Icon', module)
  .add('color', () => (
    <div>
      <StyledIcon name="note" />
      <StyledIcon name="note" color="primary" />
      <StyledIcon name="note" color="secondary" />
      <StyledIcon name="note" color="action" />
      <StyledIcon name="note" color="error" />
      <StyledIcon name="note" color="disabled" />
    </div>
  ))
  .add('size', () => (
    <div>
      <StyledIcon name="note" size="inherit" />
      <StyledIcon name="note" size="small" />
      <StyledIcon name="note" />
      <StyledIcon name="note" size="large" />
    </div>
  ));
