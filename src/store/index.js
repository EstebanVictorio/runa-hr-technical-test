import { reducers, epics } from "ducks";
import { createEpicMiddleware } from "redux-observable";
import { createStore, combineReducers, applyMiddleware } from "redux";

const epicsMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(epicsMiddleware)
);

epicsMiddleware.run(epics);

export default store;
