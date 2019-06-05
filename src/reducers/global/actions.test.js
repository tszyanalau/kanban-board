import configureStore from 'redux-mock-store';
import {
  loadApp,
  redirect,
  updateStatus,
  setLastHoveredTaskId,
  createTask,
} from './actions';
import {
  APP_LOAD,
  REDIRECT,
  UPDATE_STATUS,
  SET_LAST_HOVERED_TASK_ID,
  CREATE_TASK,
} from '../../constants/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatch loadApp', () => {
    const expectedActions = [{ type: APP_LOAD }];
    store.dispatch(loadApp());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch redirect', () => {
    const expectedActions = [{ type: REDIRECT }];
    store.dispatch(redirect());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch updateStatus', () => {
    const [taskId, fromStatusId, toStatusId] = [2, 5, 3];
    const expectedActions = [{
      type: UPDATE_STATUS,
      payload: {
        taskId,
        fromStatusId,
        toStatusId,
      },
    }];
    store.dispatch(updateStatus(taskId, fromStatusId, toStatusId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch setLastHoveredTaskId', () => {
    const taskId = 1;
    const expectedActions = [{
      type: SET_LAST_HOVERED_TASK_ID,
      payload: taskId,
    }];
    store.dispatch(setLastHoveredTaskId(taskId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch createTask', () => {
    const content = 'Task 3';
    const expectedActions = [{
      type: CREATE_TASK,
      payload: content,
    }];
    store.dispatch(createTask(content));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
