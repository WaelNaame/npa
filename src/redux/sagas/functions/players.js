import {takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {playersRequest} from '../../network/players';

import actions from '../../actions';
const {GET_PLAYERS, getPlayersDone} = actions;

function* performGetPlayers() {
  const response = yield call(playersRequest);

  if (!response.networkSuccess) {
    Alert.alert('Sorry', 'Network failed');
    yield put(getPlayersDone({payload: []}));
    return false;
  }

  yield put(getPlayersDone({payload: response.data}));
}

export function* watchGetPlayers() {
  yield takeLatest(GET_PLAYERS, performGetPlayers);
}
