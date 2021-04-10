import {createAction} from '../../helpers';

export default {
  ...createAction('GET_TEAMS'),
  ...createAction('GET_TEAMS_DONE', 'payload'),

  ...createAction('GET_TEAM_BY_ID', 'id'),
  ...createAction('GET_TEAM_BY_ID_DONE', 'payload'),
};
