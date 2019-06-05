import {
  APP_LOAD,
  REDIRECT,
  UPDATE_STATUS,
  SET_LAST_HOVERED_TASK_ID,
  CREATE_TASK,
} from '../../constants/actionTypes';

export const loadApp = () => ({ type: APP_LOAD });

export const redirect = () => ({ type: REDIRECT });

export const updateStatus = (taskId, fromStatusId, toStatusId) => ({
  type: UPDATE_STATUS,
  payload: {
    taskId,
    fromStatusId,
    toStatusId,
  },
});

export const setLastHoveredTaskId = taskId => ({
  type: SET_LAST_HOVERED_TASK_ID,
  payload: taskId,
});

export const createTask = content => ({
  type: CREATE_TASK,
  payload: content,
});
