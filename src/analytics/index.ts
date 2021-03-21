import firebase from 'firebase/app';
import { productionEnv } from '../utils';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GA_API_KEY,
  authDomain: process.env.REACT_APP_GA_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GA_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GA_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GA_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GA_APP_ID,
  measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID
};

export const analyticsInit: VoidFunction = () => {
  if (productionEnv) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const analyticslogEvent: (eventName: string, metrics?: Record<string, unknown>) => void = (
  eventName: string,
  metrics?: Record<string, unknown>
) => {
  if (productionEnv) {
    firebase.analytics().logEvent(eventName, metrics);
  }
};
