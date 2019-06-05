import _ from 'lodash';
import {
  APP_LOAD,
  REDIRECT,
  UPDATE_STATUS,
  SET_LAST_HOVERED_TASK_ID,
  CREATE_TASK,
} from '../../constants/actionTypes';

const initialState = {
  appName: 'Kanban Board',
  tasks: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [
      {
        id: 1,
        content: 'A feature requested from user to improve overall efficiency.',
      },
      {
        id: 2,
        content: 'Enhancement requested from product owner to improve overall design.',
      },
    ],
  },
  dragCounter: 0,
  createCounter: 0,
  lastHoveredTaskId: null,
};

const getNextId = (tasks) => {
  const result = [];
  _.reduce(tasks, (sum, taskArr) => {
    if (!_.isEmpty(taskArr)) {
      sum.push(...taskArr);
    }
    return sum;
  }, result);
  return _.get(_.maxBy(result, 'id'), 'id', 0) + 1;
};

const insertAtIndex = (tasks, taskToInsert, index) => {
  return [
    ..._.slice(tasks, 0, index),
    taskToInsert,
    ..._.slice(tasks, index),
  ];
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
      };

    case REDIRECT:
      return {
        ...state,
        redirectTo: null,
      };

    case UPDATE_STATUS: {
      const { tasks, dragCounter, lastHoveredTaskId } = state;
      const { taskId, fromStatusId, toStatusId } = payload;
      const fromStatusTasks = _.get(tasks, fromStatusId, []);
      const draggedTask = _.find(fromStatusTasks, ['id', taskId]);
      const draggedTaskIndex = _.findIndex(fromStatusTasks, draggedTask);
      _.set(
        tasks,
        fromStatusId,
        _.filter(fromStatusTasks, task => task.id !== taskId)
      );
      const toStatusTasks = _.get(tasks, toStatusId, []);
      if (lastHoveredTaskId) {
        const prevTaskIndex = _.findIndex(toStatusTasks, ['id', lastHoveredTaskId]);
        _.set(
          tasks,
          toStatusId,
          fromStatusId === toStatusId && draggedTaskIndex <= prevTaskIndex ?
            insertAtIndex(toStatusTasks, draggedTask, prevTaskIndex + 1) :
            insertAtIndex(toStatusTasks, draggedTask, prevTaskIndex)
        );
      } else {
        _.set(tasks, toStatusId, [...toStatusTasks, draggedTask]);
      }
      return {
        ...state,
        dragCounter: dragCounter + 1,
        tasks,
        lastHoveredTaskId: null,
      };
    }

    case SET_LAST_HOVERED_TASK_ID:
      return {
        ...state,
        lastHoveredTaskId: payload,
      };

    case CREATE_TASK: {
      const { tasks, createCounter } = state;
      const backlogTasks = _.get(tasks, 5, []);
      _.set(tasks, 5, [
        ...backlogTasks,
        {
          id: getNextId(tasks),
          content: payload,
        },
      ]);
      return {
        ...state,
        tasks,
        createCounter: createCounter + 1,
      };
    }
    default:
      return state;
  }
};
