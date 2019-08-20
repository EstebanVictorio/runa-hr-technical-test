import {
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
} from "epics/overview";

const SET_FEATURED_GAMES = "SET_FEATURED_GAMES";
const SET_LATEST_RELEASES = "SET_LATEST_RELEASES";
const FETCH_FEATURED_GAMES = "FETCH_FEATURED_GAMES";
const FETCH_LATEST_RELEASES = "FETCH_LATEST_RELEASES";

const initialState = {
  featuredGamesList: [{}, {}, {}, {}, {}, {}],
  latestReleasesList: [{}, {}, {}, {}, {}, {}]
};

const overview = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATURED_GAMES:
      return {
        ...state,
        featuredGamesList: action.payload
      };
    case SET_LATEST_RELEASES:
      return {
        ...state,
        latestReleasesList: action.payload
      };
    default:
      return state;
  }
};

const setFeaturedGames = payload => ({
  type: SET_FEATURED_GAMES,
  payload
});

const setLatestReleases = payload => ({
  type: SET_LATEST_RELEASES,
  payload
});

const fetchFeaturedGames = () => ({
  type: FETCH_FEATURED_GAMES
});

const fetchLatestReleases = () => ({
  type: FETCH_LATEST_RELEASES
});

export {
  overview,
  setFeaturedGames,
  setLatestReleases,
  fetchFeaturedGames,
  fetchLatestReleases,
  SET_FEATURED_GAMES,
  SET_LATEST_RELEASES,
  FETCH_FEATURED_GAMES,
  FETCH_LATEST_RELEASES,
  fetchFeaturedGamesEpic,
  fetchLatestReleasesEpic
};
