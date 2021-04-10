import {takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
  teamsRequest,
  teamRequest,
  teamPlayersRequest,
} from '../../network/teams';

import actions from '../../actions';
const {GET_TEAMS, getTeamsDone, GET_TEAM_BY_ID, getTeamByIdDone} = actions;

function* performGetTeame() {
  const response = yield call(teamsRequest);

  if (!response.networkSuccess) {
    Alert.alert('Sorry', 'Network failed');
    yield put(getTeamsDone({payload: []}));
    return false;
  }

  yield put(getTeamsDone({payload: response.data}));
}

export function* watchGetTeame() {
  yield takeLatest(GET_TEAMS, performGetTeame);
}

/////

function* performGetByIdTeam({id}) {
  const team = yield call(teamRequest, id);
  if (!team.networkSuccess) {
    Alert.alert('Sorry', 'Network failed');
    yield put(getTeamByIdDone({payload: []}));
    return false;
  }

  const playersResulet = yield call(teamPlayersRequest);
  if (!playersResulet.networkSuccess) {
    Alert.alert('Sorry', 'Network failed');
    return false;
  }

  yield put(
    getTeamByIdDone({
      payload: {
        team,
        players: playersResulet.data.filter(el => el.id == id) || [],
      },
    }),
  );
}

export function* watchGetTeamById() {
  yield takeLatest(GET_TEAM_BY_ID, performGetByIdTeam);
}
