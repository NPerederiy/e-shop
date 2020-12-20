import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Auth from "./reducers/auth.reducer";
import Bucket from "./reducers/bucket.reducer";
import ApplicationData from "./reducers/applicationData.reducer";

const rootReducer = combineReducers({
  authorisation: Auth,
  bucket: Bucket,
  applicationData: ApplicationData,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
