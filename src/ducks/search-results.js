import { fetchSearchEpic } from "epics/search-results";

const FETCH_SEARCH = "FETCH_SEARCH";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const initialState = {
  results: []
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: [...action.payload]
      };
    default:
      return state;
  }
};

export { searchResults, FETCH_SEARCH, SET_SEARCH_RESULTS, fetchSearchEpic };
