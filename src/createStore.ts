import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// typings for function below is missing
//@ts-ignore
import { getFirebase } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const middlewares = [thunk.withExtraArgument(getFirebase)];

export const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    //reducers   - other reducers
  });

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
