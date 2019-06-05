import reducer from './reducer';
import {
  APP_LOAD,
  REDIRECT,
  UPDATE_STATUS,
  SET_LAST_HOVERED_TASK_ID,
  CREATE_TASK,
} from '../../constants/actionTypes';

describe('reducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('should return the initial state', () => {
    const expectedState = state;
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle APP_LOAD', () => {
    const expectedState = {
      ...state,
      appLoaded: true,
    };
    expect(reducer(state, { type: APP_LOAD })).toEqual(expectedState);
  });

  it('should handle REDIRECT', () => {
    const expectedState = {
      ...state,
      redirectTo: null,
    };
    expect(reducer(state, { type: REDIRECT })).toEqual(expectedState);
  });

  it('should handle dragging taskId 2 from Backlog to QA ', () => {
    const expectedState = {
      ...state,
      tasks: {
        0: [],
        1: [],
        2: [],
        3: [{
          id: 2,
          content: 'Enhancement requested from product owner to improve overall design.',
        }],
        4: [],
        5: [{
          id: 1,
          content: 'A feature requested from user to improve overall efficiency.',
        }] },
      dragCounter: 1,
    };
    const reducedState = reducer(state, {
      type: UPDATE_STATUS,
      payload: {
        taskId: 2,
        fromStatusId: 5,
        toStatusId: 3,
      },
    });
    expect(reducedState).toEqual(expectedState);
  });

  it('should handle SET_LAST_HOVERED_TASK_ID', () => {
    const expectedState = {
      ...state,
      lastHoveredTaskId: 1,
    };
    expect(reducer(state, { type: SET_LAST_HOVERED_TASK_ID, payload: 1 })).toEqual(expectedState);
  });

  it('should handle CREATE_TASK with content \'Task 3\'', () => {
    const expectedState = {
      ...state,
      tasks: {
        ...state.tasks,
        5: [
          ...state.tasks[5],
          {
            id: 3,
            content: 'Task 3',
          },
        ],
      },
      createCounter: 1,
    };
    expect(reducer(state, { type: CREATE_TASK, payload: 'Task 3' })).toEqual(expectedState);
  });

  it('should handle dragging taskId 2 to front of 1', () => {
    const prevState = {
      ...state,
      lastHoveredTaskId: 1,
    };
    const expectedState = {
      ...state,
      tasks: {
        ...state.tasks,
        5: [
          {
            id: 2,
            content: 'Enhancement requested from product owner to improve overall design.',
          },
          {
            id: 1,
            content: 'A feature requested from user to improve overall efficiency.',
          },
        ],
      },
      dragCounter: 1,
      lastHoveredTaskId: null,
    };
    const reducedState = reducer(prevState, {
      type: UPDATE_STATUS,
      payload: {
        taskId: 2,
        fromStatusId: 5,
        toStatusId: 5,
      },
    });
    expect(reducedState).toEqual(expectedState);
  });
});
