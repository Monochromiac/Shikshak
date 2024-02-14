// firebase.js (or whatever you named your Firebase configuration file)

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apiKey: "AIzaSyDu-NUEenswCOCL8rR6ADo6NAup0IVXB4A",
  authDomain: "test-b957c.firebaseapp.com",
  projectId: "test-b957c",
  storageBucket: "test-b957c.appspot.com",
  messagingSenderId: "588825302751",
  appId: "1:588825302751:web:5986d919c1319e10b83b6a",
  measurementId: "G-28ZG2RKZ39"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
