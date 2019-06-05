
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';

const Modal = ({ title, content, actions, ...props }) => {
  const classes = makeStyles(({ breakpoints, spacing }) => ({
    root: {
      padding: spacing(1),
      width: 480,
      [breakpoints.down('xs')]: {
        padding: spacing(0.5),
        width: 'auto',
      },
    },
  }))();
  return (
    <Dialog {...props}>
      <div className={classes.root}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && <DialogContent>{content}</DialogContent>}
        {actions && <DialogActions>{actions}</DialogActions>}
      </div>
    </Dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  actions: PropTypes.node,
};

export default Modal;
