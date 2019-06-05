import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _ from 'lodash';
import { compose, withState } from 'recompose';
import Paper from '../../components/Paper';
import DraggableCard from '../DraggableCard';
import Heading from '../../components/Heading';
import { updateStatus } from '../../reducers/global/actions';

const mapStateToProps = ({ global: { tasks, dragCounter, createCounter } }) => ({
  tasks,
  dragCounter,
  createCounter,
});

const mapDispatchToProps = dispatch => ({
  onDrop: (taskId, fromStatusId, toStatusId) => {
    dispatch(updateStatus(taskId, fromStatusId, toStatusId));
  },
});

const TaskList = ({
  title,
  statusId,
  tasks,
  injectedClass: { paper = '', taskList = '', card = '', heading = '' },
  onDrop,
  dragCounter,
  createCounter,
  isDragOver,
  setIsDragOver,
  ...props
}) => {
  const classes = makeStyles(({ shadows }) => ({
    root: {
      boxShadow: isDragOver ? shadows[5] : 'auto',
    },
  }))();
  return (
    <Paper
      onDragOver={(ev) => {
        ev.preventDefault();
        if (_.parseInt(ev.dataTransfer.getData('fromStatusId')) !== statusId && !isDragOver) {
          setIsDragOver(true);
        }
      }}
      onDragLeave={(ev) => {
        ev.preventDefault();
        if (isDragOver) {
          setIsDragOver(false);
        }
      }}
      onDrop={
        (ev) => {
          ev.preventDefault();
          if (isDragOver) {
            setIsDragOver(false);
          }
          onDrop(
            _.parseInt(ev.dataTransfer.getData('taskId')),
            _.parseInt(ev.dataTransfer.getData('fromStatusId')),
            statusId
          );
        }
      }
      className={`${classes.root} ${paper}`}
      {...props}
    >
      <Heading level={6} className={heading}>{title}</Heading>
      <Grid container wrap="wrap" className={taskList}>
        {
          _.get(tasks, statusId, [])
            .map(({ content, id }, i) => {
              return (
                <div className={card} key={i}>
                  <DraggableCard content={content} id={id} statusId={statusId} />
                </div>
              );
            })
        }
      </Grid>
    </Paper>);
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('isDragOver', 'setIsDragOver', false),
);

export default enhance(TaskList);

TaskList.propTypes = {
  title: PropTypes.string,
  statusId: PropTypes.number,
  tasks: PropTypes.object,
  injectedClass: PropTypes.object,
  onDrop: PropTypes.func,
  dragCounter: PropTypes.number,
  createCounter: PropTypes.number,
  isDragOver: PropTypes.bool,
  setIsDragOver: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: {},
  injectedClass: {},
};
