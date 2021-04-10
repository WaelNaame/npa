import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

import Reactotron from './reactotron';

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  reducers,
  {},
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()),
);
sagaMiddleware.run(sagas);
