import { combineEpics } from "redux-observable";
import {
  overview,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
} from "./overview";

import {
  searchResults,
  searchDoneEpic,
  fetchSearchEpic
} from "./search-results";

const reducers = { overview, searchResults };
const epics = combineEpics(
  searchDoneEpic,
  fetchSearchEpic,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
);

export { epics, reducers };
