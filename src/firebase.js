
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAXzyHmslVZmJRIQ3U6ClCV_US0quSTbws",
  authDomain: "react-loginform-52649.firebaseapp.com",
  projectId: "react-loginform-52649",
  storageBucket: "react-loginform-52649.appspot.com",
  messagingSenderId: "904850040501",
  appId: "1:904850040501:web:221e206ed9e8720958c0fc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



