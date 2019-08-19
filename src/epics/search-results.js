import { of } from "rxjs";
import { ofType } from "redux-observable";
import { fetchSearch } from "services/rawg-io";
import { switchMap, mapTo, map } from "rxjs/operators";
import {
  FETCH_SEARCH,
  SET_SEARCH_RESULTS,
  fetchSearchDone
} from "ducks/search-results";

const fetchSearchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_SEARCH),
    switchMap(fetchSearch)
  );

const searchDoneEpic = action$ =>
  action$.pipe(
    ofType(SET_SEARCH_RESULTS),
    mapTo(fetchSearchDone())
  );

export { fetchSearchEpic, searchDoneEpic };
