import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FirebaseAPIKey,
  authDomain: import.meta.env.VITE_FirebaseAuthDomain,
  projectId: import.meta.env.VITE_FirebaseProjectId,
  storageBucket: import.meta.env.VITE_FirebaseStorageBucket,
  messagingSenderId: import.meta.env.VITE_FirebaseMessagingSenderId,
  appId: import.meta.env.VITE_FirebaseAppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;