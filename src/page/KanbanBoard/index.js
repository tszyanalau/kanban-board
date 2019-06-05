import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import BacklogList from './BacklogList';
import { STATUS_TYPES, BACKLOG } from '../../constants/statusTypes';
import TaskList from '../../containers/TaskList';
import CreateTaskForm from '../../containers/CreateTaskForm';

const KanbanBoard = () => {
  const classes = makeStyles(({ palette, spacing }) => ({
    paper: {
      background: palette.primary[50],
      minHeight: 300,
      width: '100%',
    },
    taskList: {
      flexDirection: 'column',
    },
    heading: {
      color: palette.primary[900],
      margin: spacing(1),
    },
  }))();
  return (
    <div>
      <Grid container wrap="wrap" justify="center">
        {
          _.map(_.filter(STATUS_TYPES, type => type !== BACKLOG), (status, i) => {
            return (
              <Grid container item xs={6} lg={2} key={i}>
                <TaskList
                  title={status}
                  statusId={i}
                  injectedClass={classes}
                />
              </Grid>
            );
          })
        }
        <BacklogList />
      </Grid>
      <CreateTaskForm />
    </div>
  );
};

export default KanbanBoard;
