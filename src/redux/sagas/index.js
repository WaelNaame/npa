import {fork} from 'redux-saga/effects';

import * as teams from './functions/teams';
import * as players from './functions/players';
import * as games from './functions/games';

const sagas = Object.values({
  ...teams,
  ...players,
  ...games,
});

export default function* root() {
  for (let index = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}
