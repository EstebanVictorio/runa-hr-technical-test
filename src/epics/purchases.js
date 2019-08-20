import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import { purchaseGame } from "services/stripe";
import {
  START_PURCHASE,
  PURCHASE_FAILED,
  PURCHASE_SUCCEEDED
} from "ducks/purchases";

const purchaseEpic = action$ =>
  action$.pipe(
    ofType(START_PURCHASE),
    switchMap(purchaseGame)
  );

const purchaseFailedEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_FAILED),
    switchMap()
  );

const purchaseSucceededEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_SUCCEEDED),
    switchMap()
  );

export { purchaseEpic };
