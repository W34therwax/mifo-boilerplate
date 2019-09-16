import React from "react";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { Router, Link } from "@reach/router";
import { reactReduxFirebaseConfig, firebaseConfig } from "./config";
import { configureStore } from "./createStore";
import { Home } from "./pages/home";

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={reactReduxFirebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
    <nav>
      <Link to="/home">Home</Link>
    </nav>
    <Router>
      <Home path="home" />
    </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);
