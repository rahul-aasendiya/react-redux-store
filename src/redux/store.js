import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENDION__ && window.__REDUX_DEVTOOLS_EXTENDION__()
);
export default store;
