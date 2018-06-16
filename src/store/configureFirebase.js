import firebase from "firebase";
import { reactReduxFirebase } from "react-redux-firebase";

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from "react-native-dotenv";

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
});

const firebaseMiddleware = reactReduxFirebase(firebase, {
  enableRedirectHandling: false
});

export { firebaseMiddleware, firebase };
