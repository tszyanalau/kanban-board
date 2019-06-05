import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core/styles';
import Input from '.';

const StyledInput = withStyles(() => ({
  root: {
    width: 300,
  },
}))(Input);

storiesOf('Atoms|Input', module)
  .add('default', () => (<Input id="label" label="label" />))
  .add('textarea', () => (<StyledInput id="textarea" label="textarea" textarea />));
