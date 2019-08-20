import { purchaseFailed, purchaseSucceeded } from "ducks/purchases";
import { PAYMENT_URL } from "utils/constants";

const purchaseGame = async ({ payload }) => {
  const response = await fetch(PAYMENT_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return purchaseSucceeded();
};

export { purchaseGame };
