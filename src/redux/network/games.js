import {request} from './api';

export const gamesRequest = data => request('GET', '/games', data);
