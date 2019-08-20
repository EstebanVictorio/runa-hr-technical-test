import { purchaseEpic } from "epics/purchases";

const START_PURCHASE = "START_PURCHASE";
const PURCHASE_FAILED = "PURCHASE_FAILED";
const SET_PURCHASE_INFO = "SET_PURCHASE_INFO";
const PURCHASE_SUCCEEDED = "PURCHASE_SUCCEEDED";

const initialState = {
  list: [],
  purchasing: false,
  successful: false,
  errorInfo: {},
  gameToBuy: {}
};
const purchases = (state = initialState, action) => {
  switch (action.type) {
    case START_PURCHASE:
      return {
        ...state,
        purchasing: true
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
        purchasing: false
      };
    case PURCHASE_FAILED:
      return {
        ...state,
        successful: false,
        purchasing: false,
        errorInfo: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};

const startPurchase = payload => ({
  type: START_PURCHASE,
  payload
});

const setPurchaseInfo = () => ({
  type: SET_PURCHASE_INFO
});

const purchaseSucceeded = () => ({
  type: PURCHASE_SUCCEEDED
});

const purchaseFailed = payload => ({
  type: PURCHASE_FAILED,
  payload
});

export {
  START_PURCHASE,
  PURCHASE_FAILED,
  SET_PURCHASE_INFO,
  PURCHASE_SUCCEEDED,
  startPurchase,
  purchaseFailed,
  purchaseSucceeded,
  purchaseEpic,
  purchases
};
