import {createReducer} from '../../helpers';

export const games = createReducer({
  actionsPrefix: 'GET_GAMES',
  defaultData: [],
});
