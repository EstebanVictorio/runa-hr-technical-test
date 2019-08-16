import { fetchEnemiesEpic } from "epics/enemies";

export const FETCH_ENEMIES = "FETCH_ENEMIES";
export const SET_ENEMIES = "SET_ENEMIES";

const initialState = {
  list: []
};

const enemies = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENEMIES:
      return {
        list: [...state.list, ...action.payload]
      };
    default:
      return state;
  }
};

const fetchEnemies = () => ({
  type: FETCH_ENEMIES
});

const setEnemies = payload => ({
  type: SET_ENEMIES,
  payload
});

export { enemies, setEnemies, fetchEnemies, fetchEnemiesEpic };
