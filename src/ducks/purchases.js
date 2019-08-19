import {} from "epics/purchases";

const PURCHASE_DONE = "PURCHASE_DONE";
const START_PURCHASE = "START_PURCHASE";
const PURCHASE_FAILED = "PURCHASE_FAILED";
const SET_PURCHASE_INFO = "SET_PURCHASE_INFO";
const PURCHASE_SUCCEEDED = "PURCHASE_SUCCEEDED";

const initialState = {};
const purchases = (state = initialState, action) => {};

const startPurchase = payload => ({
  type: START_PURCHASE,
  payload
});

const setPurchaseInfo = () => ({
  type: SET_PURCHASE_INFO
});

const purchaseDone = () => ({
  type: PURCHASE_DONE
});

const purchaseSucceeded = () => ({
  type: PURCHASE_SUCCEEDED
});

const purchaseFailed = () => ({
  type: PURCHASE_FAILED
});

export {
  PURCHASE_DONE,
  START_PURCHASE,
  PURCHASE_FAILED,
  PURCHASE_SUCCEEDED,
  purchaseDone,
  startPurchase,
  purchaseFailed,
  purchaseSucceeded
};
