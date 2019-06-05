import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Molecules|Card', module)
  .add('card with content', () => (<Card content="Todo task 1" style={{ width: 300, height: 150 }} />));
