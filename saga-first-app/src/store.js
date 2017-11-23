/*
//1.
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

//import Counter from './Counter'
import reducer from './reducers';

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it on the store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// run the saga
sagaMiddleware.run(mySaga)
//render the application
//2.create a folder reducers inside it 1 file created named index.js,outside thatactions.js*/
