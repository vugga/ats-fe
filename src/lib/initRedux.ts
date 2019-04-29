import { createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as rootReducer, rootInitState } from "appRedux";

import createMiddleware from "./middleware";
// import persist from "./persist";

let reduxStore = null;
const middleware = createMiddleware(thunkMiddleware);

interface Props {
  initialState?: any;
  token?: string;
}

export default (props?: Props): Store => {
  const initStore = props && props.initialState? props.initialState : rootInitState;
  let store;
  if (!process.browser || !reduxStore) {
    store = createStore(rootReducer, initStore , middleware);

    /** 
    let tokenInStore = store.getState().auth.token;

    if (!tokenInStore) {
      (async () => {
        tokenInStore =
          token || (await Promise.resolve(persist.willGetAccessToken()));

        if (typeof token === 'string' && !token.includes('Error')) {
          if (token.length) {
            store.dispatch(dispatchers.signIn(token));
          } else {
            store.dispatch(dispatchers.signOut());
          }
        } else {
          store.dispatch(dispatchers.signOut());
        }
      })();
    }
    **/

    if (!process.browser) {
      return store;
    }
    reduxStore = store;
  }
  return reduxStore;
};
