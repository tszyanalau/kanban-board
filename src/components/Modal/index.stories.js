import React from 'react';
import { storiesOf } from '@storybook/react';
import DialogContentText from '@material-ui/core/DialogContentText';
import Modal from '.';
import Button from '../Button';

const content = <DialogContentText>Content Text</DialogContentText>;
const actions = <Button>Submit</Button>;

storiesOf('Molecules|Modal', module)
  .add('with title, content and actions', () => (
    <div>
      <Modal open title="Modal Title" content={content} actions={actions} />
    </div>
  ));
