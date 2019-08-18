import { combineEpics } from "redux-observable";
import {
  overview,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
} from "./overview";

import { searchResults, fetchSearchEpic } from "./search-results";

const reducers = { overview, searchResults };
const epics = combineEpics(
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic,
  fetchSearchEpic
);

export { epics, reducers };
