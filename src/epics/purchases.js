import { ofType } from "redux-observable";
import { purchaseGame, assignPurchaseInfo } from "services/stripe";
import { Observable } from "rxjs";
import { switchMap, mergeMap, delay, mapTo } from "rxjs/operators";
import {
  START_PURCHASE,
  PURCHASE_FAILED,
  SET_PURCHASE_INFO,
  PURCHASE_SUCCEEDED,
  purchaseDone,
  clearPurchaseInfo
} from "ducks/purchases";

const purchaseEpic = action$ =>
  action$.pipe(
    ofType(START_PURCHASE),
    switchMap(purchaseGame)
  );

const purchaseFailedEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_FAILED),
    delay(3000),
    mapTo(clearPurchaseInfo())
  );

const purchaseSucceededEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_SUCCEEDED),
    mergeMap(assignPurchaseInfo)
  );

const purchaseSucceededCleanEpic = action$ =>
  action$.pipe(
    ofType(SET_PURCHASE_INFO),
    mapTo(purchaseDone())
  );

export {
  purchaseEpic,
  purchaseFailedEpic,
  purchaseSucceededEpic,
  purchaseSucceededCleanEpic
};
