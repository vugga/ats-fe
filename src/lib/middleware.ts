import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default function createMiddleware(clientMiddleware) {
  return composeWithDevTools(applyMiddleware(clientMiddleware));
}
