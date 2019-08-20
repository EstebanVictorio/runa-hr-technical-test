import { combineEpics } from "redux-observable";
import {
  modal,
  onSuccessfulPurchaseModalCloseEpic,
  onModalCloseEpic
} from "./modal";
import {
  purchases,
  purchaseEpic,
  purchaseFailedEpic,
  purchaseSucceededEpic,
  purchaseSucceededCleanEpic
} from "./purchases";
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
  purchaseFailedEpic,
  purchaseSucceededEpic,
  purchaseSucceededCleanEpic,
  searchDoneEpic,
  fetchSearchEpic,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic,
  onSuccessfulPurchaseModalCloseEpic,
  onModalCloseEpic
);

export { epics, reducers };
