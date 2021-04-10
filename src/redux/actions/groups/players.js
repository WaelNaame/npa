import {createAction} from '../../helpers';

export default {
  ...createAction('GET_PLAYERS'),
  ...createAction('GET_PLAYERS_DONE', 'payload'),
};
