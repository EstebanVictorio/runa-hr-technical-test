const API_URL = " https://api.rawg.io/api/games";
const FEATURED_GAMES_API_URL =
  "https://api.rawg.io/api/games/assassins-creed/suggested?page_size=6";
const LATEST_RELEASES_API_URL =
  "https://api.rawg.io/api/games/call-of-duty/suggested?page_size=6";

const PAYMENT_URL = "http://localhost:3000/pay";

const SVG_ICONS_PATH = "/icons";
const DEBOUNCE_TIME = 1.5 * 1000;

const OK = 200; // 200 - OK	Everything worked as expected.
const BAD_REQUEST = 400; // 400 - Bad Request	The request was unacceptable, often due to missing a required parameter.
const UNAUTHORIZED = 401; // 401 - Unauthorized	No valid API key provided.
const REQUEST_FAILED = 402; // 402 - Request Failed	The parameters were valid but the request failed.
const NOT_FOUND = 404; // 404 - Not Found	The requested resource doesn't exist.
const CONFLICT = 409; // 409 - Conflict	The request conflicts with another request (perhaps due to using the same idempotent key).
const TOO_MANY_REQUESTS = 429; // 429 - Too Many Requests	Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
// 500, 502, 503, 504 - Server Errors
const INTERNAL_SERVER_ERROR = 500;
const BAD_GATEWAY = 502;
const SERVICE_UNAVAILABLE = 503;
const GATEWAY_TIMEOUT = 504;

export {
  OK,
  BAD_REQUEST,
  UNAUTHORIZED,
  REQUEST_FAILED,
  NOT_FOUND,
  CONFLICT,
  TOO_MANY_REQUESTS,
  INTERNAL_SERVER_ERROR,
  BAD_GATEWAY,
  SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT,
  API_URL,
  PAYMENT_URL,
  DEBOUNCE_TIME,
  SVG_ICONS_PATH,
  LATEST_RELEASES_API_URL,
  FEATURED_GAMES_API_URL
};
