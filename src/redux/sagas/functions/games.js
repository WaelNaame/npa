import {takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {gamesRequest} from '../../network/games';

import actions from '../../actions';
const {GET_GAMES, getGamesDone} = actions;

function* performGetGames() {
  const response = yield call(gamesRequest);

  if (!response.networkSuccess) {
    Alert.alert('Sorry', 'Network failed');
    yield put(getGamesDone({payload: []}));
    return false;
  }

  yield put(getGamesDone({payload: response.data}));
}

export function* watchGetGames() {
  yield takeLatest(GET_GAMES, performGetGames);
}
