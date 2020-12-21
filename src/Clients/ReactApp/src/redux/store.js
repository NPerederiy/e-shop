import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Auth from "./reducers/auth.reducer";
import Basket from "./reducers/basket.reducer";
import ApplicationData from "./reducers/applicationData.reducer";

const rootReducer = combineReducers({
  authorisation: Auth,
  basket: Basket,
  applicationData: ApplicationData,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
