import { Action, applyMiddleware, compose, createStore, Reducer } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export function configureStore<S, A extends Action>(
  rootReducer: Reducer<S, A>,
  rootEpic: Epic
) {
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore<S, A, unknown, unknown>(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);
  return store;
}
