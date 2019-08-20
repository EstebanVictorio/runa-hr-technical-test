import { PAYMENT_URL, PAYMENT_SUCCEEDED, OK } from "utils/constants";
import {
  purchaseFailed,
  purchaseSucceeded,
  setPurchaseInfo
} from "ducks/purchases";

const purchaseGame = async ({ payload }) => {
  const response = await fetch(PAYMENT_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const jsonResponse = await response.json();

  if (response.status !== OK || jsonResponse.status !== PAYMENT_SUCCEEDED) {
    return purchaseFailed({
      description: `${OK ? "Payment" : "Request"} failed`
    });
  }

  return purchaseSucceeded({ game: jsonResponse.description });
};

const assignPurchaseInfo = async action => setPurchaseInfo(action.payload);

export { purchaseGame, assignPurchaseInfo };
