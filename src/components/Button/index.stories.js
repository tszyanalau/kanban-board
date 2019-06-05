import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Atoms|Button', module)
  .add('primary', () => (
    <div>
      <Button>Default</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  ))
  .add('secondary', () => (
    <div>
      <Button color="secondary">Default</Button>
      <Button color="secondary" variant="text">Text</Button>
      <Button color="secondary" variant="outlined">Outlined</Button>
    </div>
  ))
  .add('default', () => (
    <div>
      <Button color="default">Default</Button>
      <Button color="default" variant="text">Text</Button>
      <Button color="default" variant="outlined">Outlined</Button>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button disabled>Default</Button>
      <Button variant="text" disabled>Text</Button>
      <Button variant="outlined" disabled>Outlined</Button>
    </div>
  ))
  .add('link', () => (
    <Button href="https://google.com">Link</Button>
  ))
  .add('size', () => (
    <div>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="small" fullWidth>Small Full Width</Button>
      <Button size="medium" fullWidth>Medium Full Width</Button>
      <Button size="large" fullWidth>Large Full Width</Button>
    </div>
  ));
