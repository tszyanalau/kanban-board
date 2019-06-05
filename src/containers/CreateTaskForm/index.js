import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import DialogContentText from '@material-ui/core/DialogContentText';
import { compose, withState } from 'recompose';
import Fab from '../../components/Fab';
import Modal from '../../components/Modal';
import { createTask } from '../../reducers/global/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from '../../components/Icon';

const mapDispatchToProps = dispatch => ({
  onSubmit: content => dispatch(createTask(content)),
});

const CreateTaskForm = ({ onSubmit, open, setOpen, content, setContent }) => {
  const classes = makeStyles(({ breakpoints, spacing }) => ({
    fab: {
      position: 'fixed',
      bottom: spacing(4),
      right: spacing(4),
      [breakpoints.down('md')]: {
        bottom: spacing(2),
        right: spacing(2),
      },
    },
    fabIcon: {
      marginRight: spacing(1),
    },
  }))();

  const modalContent = (
    <div>
      <DialogContentText>Add a task to Backlog</DialogContentText>
      <Input
        id="content"
        label="Content"
        textarea
        fullWidth
        onChange={ev => setContent(ev.target.value)}
      />
    </div>
  );

  const closeModal = () => {
    setContent(null);
    setOpen(false);
  };

  const actionButtons = (
    <div>
      <Button
        onClick={() => {
          closeModal();
        }}
      >
        Cancel
      </Button>
      <Button
        color="secondary"
        disabled={_.isEmpty(content)}
        onClick={() => {
          onSubmit(content);
          closeModal();
        }}
      >
        Create
      </Button>
    </div>
  );
  return (
    <div>
      <Hidden lgUp>
        <Fab className={classes.fab} onClick={() => setOpen(true)}><Icon size="small" name="add" /></Fab>
      </Hidden>
      <Hidden mdDown>
        <Fab className={classes.fab} size="large" variant="extended" onClick={() => setOpen(true)}>
          <Icon name="create" className={classes.fabIcon} fontSize="small" />
          Create Task
        </Fab>
      </Hidden>

      <Modal
        title="Create Task"
        content={modalContent}
        actions={actionButtons}
        open={open}
        aria-labelledby="form-dialog-title"
      />
    </div>
  );
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('open', 'setOpen', false),
  withState('content', 'setContent', null),
);

export default enhance(CreateTaskForm);

CreateTaskForm.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  content: PropTypes.string,
  setContent: PropTypes.func,
  onSubmit: PropTypes.func,
};

