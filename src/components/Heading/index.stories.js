import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';

storiesOf('Atoms|Heading', module)
  .add('level', () => (
    <div>
      <Heading level={1}>Id tempor duis non esse.</Heading>
      <Heading level={2}>Id tempor duis non esse.</Heading>
      <Heading level={3}>Id tempor duis non esse.</Heading>
      <Heading level={4}>Id tempor duis non esse.</Heading>
      <Heading level={5}>Id tempor duis non esse.</Heading>
      <Heading level={6}>Id tempor duis non esse.</Heading>
    </div>
  ))
  .add('palette', () => (
    <div>
      <Heading color="primary">Id tempor duis non esse.</Heading>
      <Heading color="secondary">Id tempor duis non esse.</Heading>
    </div>
  ));
