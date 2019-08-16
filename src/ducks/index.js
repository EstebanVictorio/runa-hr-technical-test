import { enemies, fetchEnemiesEpic } from "./enemies";
import { weapons, fetchWeaponsEpic } from "./weapons";
import { combineEpics } from "redux-observable";
const reducers = { enemies, weapons };
const epics = combineEpics(fetchEnemiesEpic, fetchWeaponsEpic);
export { epics, reducers };
