import {
  purchaseEpic,
  purchaseFailedEpic,
  purchaseSucceededEpic,
  purchaseSucceededCleanEpic
} from "epics/purchases";

const PURCHASE_DONE = "PURCHASE_DONE";
const START_PURCHASE = "START_PURCHASE";
const SET_GAME_TO_BUY = "SET_GAME_TO_BUY";
const PURCHASE_FAILED = "PURCHASE_FAILED";
const SET_PURCHASE_INFO = "SET_PURCHASE_INFO";
const PURCHASE_SUCCEEDED = "PURCHASE_SUCCEEDED";
const CLEAR_PURCHASE_INFO = "CLEAR_PURCHASE_INFO";

const initialState = {
  list: [],
  gameToBuy: {},
  errorInfo: null,
  gameBought: null,
  purchasing: false,
  successful: false
};

const purchases = (state = initialState, action) => {
  switch (action.type) {
    case START_PURCHASE:
      return {
        ...state,
        purchasing: true
      };
    case PURCHASE_DONE:
      return {
        ...state,
        purchasing: false
      };
    case SET_GAME_TO_BUY:
      return {
        ...state,
        gameToBuy: action.payload
      };
    case SET_PURCHASE_INFO:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    case PURCHASE_SUCCEEDED:
      return {
        ...state,
        successful: true,
        gameBought: action.payload
      };
    case CLEAR_PURCHASE_INFO:
      return {
        ...state,
        gameToBuy: {},
        errorInfo: null,
        gameBought: null,
        purchasing: false,
        successful: false
      };
    case PURCHASE_FAILED:
      return {
        ...state,
        successful: false,
        errorInfo: action.payload
      };

    default:
      return state;
  }
};

const clearPurchaseInfo = () => ({
  type: CLEAR_PURCHASE_INFO
});

const startPurchase = payload => ({
  type: START_PURCHASE,
  payload
});

const setPurchaseInfo = payload => ({
  type: SET_PURCHASE_INFO,
  payload
});

const purchaseSucceeded = payload => ({
  type: PURCHASE_SUCCEEDED,
  payload
});

const purchaseFailed = payload => ({
  type: PURCHASE_FAILED,
  payload
});

const purchaseDone = () => ({
  type: PURCHASE_DONE
});

const setGameToBuy = payload => ({
  type: SET_GAME_TO_BUY,
  payload
});

export {
  purchases,
  PURCHASE_DONE,
  START_PURCHASE,
  PURCHASE_FAILED,
  SET_GAME_TO_BUY,
  SET_PURCHASE_INFO,
  PURCHASE_SUCCEEDED,
  purchaseDone,
  setGameToBuy,
  startPurchase,
  purchaseFailed,
  setPurchaseInfo,
  purchaseSucceeded,
  clearPurchaseInfo,
  purchaseEpic,
  purchaseFailedEpic,
  purchaseSucceededEpic,
  purchaseSucceededCleanEpic
};
