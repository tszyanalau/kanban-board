import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import TaskList from '../../containers/TaskList';
import { BACKLOG, STATUS_TYPES } from '../../constants/statusTypes';

const BacklogList = () => {
  const classes = makeStyles(({ breakpoints, palette, spacing }) => ({
    paper: {
      background: palette.secondary[50],
      minHeight: 300,
    },
    heading: {
      color: palette.secondary[900],
      margin: spacing(1),
    },
    taskList: {
      [breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    card: {
      [breakpoints.up('lg')]: {
        flexBasis: '20%',
      },
    },
  }))();
  const statusId = _.indexOf(STATUS_TYPES, BACKLOG);
  return (
    <Grid item xs={6} lg={10}>
      <TaskList
        title={BACKLOG}
        injectedClass={classes}
        statusId={statusId}
      />
    </Grid>
  );
};

export default BacklogList;
