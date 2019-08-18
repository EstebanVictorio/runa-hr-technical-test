import { combineEpics } from "redux-observable";
import {
  overview,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
} from "./overview";

const reducers = { overview };
const epics = combineEpics(fetchFeaturedGamesEpic, fetchLatestReleasesEpic);

export { epics, reducers };
