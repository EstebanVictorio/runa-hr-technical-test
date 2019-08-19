import NProgress from "nprogress";
import { setFeaturedGames, setLatestReleases } from "ducks/overview";
import { setSearchResults } from "ducks/search-results";
import {
  OK,
  API_URL,
  FEATURED_GAMES_API_URL,
  LATEST_RELEASES_API_URL
} from "utils/constants";

const fetchFeaturedGames = async action => {
  NProgress.start();
  const response = await fetch(FEATURED_GAMES_API_URL);
  const { results } = await response.json();
  NProgress.done();
  return setFeaturedGames(results);
};

const fetchLatestReleases = async action => {
  NProgress.start();
  const response = await fetch(LATEST_RELEASES_API_URL);
  const { results } = await response.json();
  NProgress.done();
  return setLatestReleases(results);
};

const fetchSearch = async action => {
  // NProgress.start();
  const response = await fetch(
    `${API_URL}?page_size=5&search=${encodeURI(action.payload)}`
  );
  const { results } = await response.json();
  // NProgress.done();
  return setSearchResults(results);
};

export { fetchSearch, fetchFeaturedGames, fetchLatestReleases };
