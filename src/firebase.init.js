// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2CQqHA7g-7lnqmH5l7y7RzxiEAdWOjI",
  authDomain: "instagram-clone-26fa1.firebaseapp.com",
  projectId: "instagram-clone-26fa1",
  storageBucket: "instagram-clone-26fa1.appspot.com",
  messagingSenderId: "207535569314",
  appId: "1:207535569314:web:49cbbf975b6b062077dafb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;