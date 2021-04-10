import {createReducer} from '../../helpers';

export const teams = createReducer({
  actionsPrefix: 'GET_TEAMS',
  defaultData: [],
});

export const teamDetails = createReducer({
  actionsPrefix: 'GET_TEAM_BY_ID',
  defaultData: {},
});
