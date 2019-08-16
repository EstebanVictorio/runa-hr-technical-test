import { fetchWeaponsEpic } from "epics/weapons";

export const FETCH_WEAPONS = "FETCH_WEAPONS";
export const SET_WEAPONS = "SET_WEAPONS";

const initialState = {
  list: []
};

const weapons = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEAPONS:
      return {
        list: [...state.list, ...action.payload]
      };
    default:
      return state;
  }
};

const fetchWeapons = () => ({
  type: FETCH_WEAPONS
});

const setWeapons = payload => ({
  type: SET_WEAPONS,
  payload
});

export { weapons, setWeapons, fetchWeapons, fetchWeaponsEpic };
