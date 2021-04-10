import {request} from './api';

export const playersRequest = data => request('GET', '/players', data);
