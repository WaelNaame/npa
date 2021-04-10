import {combineReducers} from 'redux';
import camelCase from 'lodash/camelCase';

export const createAction = (type, ...props) => {
  const actionCreatorName = camelCase(type);

  const actionCreator = (data = {}) => {
    const action = {type};
    props.forEach(property => {
      if (data.hasOwnProperty(property)) {
        action[property] = data[property];
      } else {
        action[property] = null;
      }
    });
    return action;
  };

  return {[type]: type, [actionCreatorName]: actionCreator};
};

export const createReducer = ({actionsPrefix, defaultData}) => {
  const LOAD_REQUEST = `${actionsPrefix}`;
  const LOAD_DONE = `${actionsPrefix}_DONE`;

  const isLoading = (state = false, action) => {
    switch (action.type) {
      case LOAD_REQUEST:
        return true;
      case LOAD_DONE:
        return false;
      default:
        return state;
    }
  };

  const data = (state = defaultData, action) => {
    switch (action.type) {
      case LOAD_REQUEST:
        return defaultData;
      case LOAD_DONE:
        return action.payload;
      default:
        return state;
    }
  };

  return combineReducers({isLoading, data});
};
