import {createReducer} from '../../helpers';

export const players = createReducer({
  actionsPrefix: 'GET_PLAYERS',
  defaultData: [],
});
