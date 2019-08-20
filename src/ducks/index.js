import { combineEpics } from "redux-observable";
import { purchases, purchaseEpic } from "./purchases";
import { modal } from "./modal";
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

const reducers = { overview, searchResults, purchases, modal };
const epics = combineEpics(
  purchaseEpic,
  searchDoneEpic,
  fetchSearchEpic,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
);

export { epics, reducers };
