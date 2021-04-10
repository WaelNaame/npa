import {createAction} from '../../helpers';

export default {
  ...createAction('GET_GAMES'),
  ...createAction('GET_GAMES_DONE', 'payload'),
};
