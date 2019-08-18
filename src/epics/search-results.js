import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { fetchSearch } from "services/rawg-io";
import { FETCH_SEARCH } from "ducks/search-results";

const fetchSearchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_SEARCH),
    switchMap(fetchSearch)
  );

export { fetchSearchEpic };
