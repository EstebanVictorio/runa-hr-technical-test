import { mapTo, delay } from "rxjs/operators";
import { modalClose, MODAL_CLOSE } from "ducks/modal";
import { ofType } from "redux-observable";
import { PURCHASE_DONE, clearPurchaseInfo } from "ducks/purchases";

const onSuccessfulPurchaseModalCloseEpic = action$ =>
  action$.pipe(
    ofType(PURCHASE_DONE),
    delay(3000),
    mapTo(modalClose())
  );

const onModalCloseEpic = action$ =>
  action$.pipe(
    ofType(MODAL_CLOSE),
    mapTo(clearPurchaseInfo())
  );

export { onSuccessfulPurchaseModalCloseEpic, onModalCloseEpic };
