import { fetchSearchEpic, searchDoneEpic } from "epics/search-results";

const FETCH_SEARCH = "FETCH_SEARCH";
const FETCH_SEARCH_DONE = "FETCH_SEARCH_DONE";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const CLEAN_SEARCH_RESULTS = "CLEAN_SEARCH_RESULTS";

const initialState = {
  results: [],
  searching: false
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        searching: true
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: [...action.payload]
      };
    case CLEAN_SEARCH_RESULTS:
      return {
        ...state,
        results: []
      };
    case FETCH_SEARCH_DONE:
      return {
        ...state,
        searching: false
      };
    default:
      return state;
  }
};

const fetchSearch = payload => ({
  type: FETCH_SEARCH,
  payload
});

const setSearchResults = payload => ({
  type: SET_SEARCH_RESULTS,
  payload
});

const cleanSearchResults = () => ({
  type: CLEAN_SEARCH_RESULTS
});

const fetchSearchDone = () => ({
  type: FETCH_SEARCH_DONE
});

export {
  searchResults,
  FETCH_SEARCH,
  FETCH_SEARCH_DONE,
  SET_SEARCH_RESULTS,
  fetchSearch,
  fetchSearchDone,
  cleanSearchResults,
  setSearchResults,
  fetchSearchEpic,
  searchDoneEpic
};
