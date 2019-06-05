import React from 'react';
import { storiesOf } from '@storybook/react';
import { blue } from '@material-ui/core/colors';
import Paper from '.';
import Heading from '../Heading';

storiesOf('Atoms|Paper', module)
  .add('with style', () => (
    <Paper style={{ width: 200, height: 400, background: blue[50] }} />
  ))
  .add('with children', () => (
    <Paper style={{ width: 200, height: 400, background: blue[50] }}>
      <Heading level={6}>Heading</Heading>
    </Paper>
  ));
