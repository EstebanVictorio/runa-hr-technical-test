import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { fetchFeaturedGames, fetchLatestReleases } from "services/rawg-io";
import { FETCH_FEATURED_GAMES, FETCH_LATEST_RELEASES } from "ducks/overview";

const fetchFeaturedGamesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_FEATURED_GAMES),
    mergeMap(fetchFeaturedGames)
  );

const fetchLatestReleasesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_LATEST_RELEASES),
    mergeMap(fetchLatestReleases)
  );

export { fetchFeaturedGamesEpic, fetchLatestReleasesEpic };
