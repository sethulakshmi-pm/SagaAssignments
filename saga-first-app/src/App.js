import React from 'react';
import './App.css';
import Counter from './Counter.js';
import { Provider } from 'react-redux';
import {reducer} from './ReducerFile';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
