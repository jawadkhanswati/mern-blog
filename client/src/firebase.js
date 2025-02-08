// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"",
  authDomain: "mernblog-7435e.firebaseapp.com",
  projectId: "mernblog-7435e",
  storageBucket: "mernblog-7435e.firebasestorage.app",
  messagingSenderId: "237082834190",
  appId: "1:237082834190:web:149b632167180e35f5535f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);