import { ReactReduxFirebaseConfig } from "react-redux-firebase"

//should come frome env
// export const FirebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID
// };

export const firebaseConfig = {
  apiKey: "AIzaSyDkl4shdKh5cbYoJHlsFm33w9LpqNwxPEo",
  authDomain: "mifo-dev.firebaseapp.com",
  databaseURL: "https://mifo-dev.firebaseio.com",
  projectId: "mifo-dev",
  storageBucket: "mifo-dev.appspot.com",
  messagingSenderId: "1019066540115",
  appId: "1:1019066540115:web:e99172b0d1597643faa6a6"
}

export const reactReduxFirebaseConfig: Partial<ReactReduxFirebaseConfig> = {
  userProfile: 'users',
  useFirestoreForProfile: true
}