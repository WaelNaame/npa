import {combineReducers} from 'redux';

import * as teamsReducers from './groups/teams';
import * as playersReducers from './groups/players';
import * as gamesReducers from './groups/games';

export default combineReducers({
  ...teamsReducers,
  ...playersReducers,
  ...gamesReducers,
});
