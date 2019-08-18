import NProgress from "nprogress";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { FETCH_FEATURED_GAMES, FETCH_LATEST_RELEASES } from "ducks/overview";

const fetchFeaturedGamesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_FEATURED_GAMES),
    mergeMap(/**/)
  );

const fetchLatestReleasesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_LATEST_RELEASES),
    mergeMap(/**/)
  );

export { fetchFeaturedGamesEpic, fetchLatestReleasesEpic };
