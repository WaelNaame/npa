import {request} from './api';

export const teamsRequest = data => request('GET', '/teams', data);
export const teamRequest = id => request('GET', `/teams/${id}`);
export const teamPlayersRequest = data => request('GET', `/players`, data);
