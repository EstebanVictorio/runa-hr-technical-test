import { ofType } from "redux-observable";
import { START_PURCHASE, PURCHASE_DONE } from "ducks/purchases";
import { switchMap } from "rxjs/operators";

const startPurchaseEpic = action$ =>
  action$.pipe(
    ofType(START_PURCHASE),
    switchMap()
  );

const purchaseDoneEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_DONE),
    switchMap()
  );

export { startPurchaseEpic };
