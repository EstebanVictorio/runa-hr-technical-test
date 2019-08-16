import { reducers, epics } from "ducks";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

const epicsMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(epicsMiddleware)
);

epicsMiddleware.run(epics);

export default store;
