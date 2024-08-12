// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgEbHeFbNU8UORuWJH5Hhimu9xIOECvw0",
  authDomain: "pantry-tracker-b9590.firebaseapp.com",
  projectId: "pantry-tracker-b9590",
  storageBucket: "pantry-tracker-b9590.appspot.com",
  messagingSenderId: "311136585002",
  appId: "1:311136585002:web:518299eb181209be9cca53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}