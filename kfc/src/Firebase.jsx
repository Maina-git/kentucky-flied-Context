// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlq3lCiCdDvttyZVEY0CrE_pEseoK0bo",
  authDomain: "kentuckyflied-b4572.firebaseapp.com",
  projectId: "kentuckyflied-b4572",
  storageBucket: "kentuckyflied-b4572.appspot.com",
  messagingSenderId: "662562729697",
  appId: "1:662562729697:web:5f22a137d520406ddd51a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth=getAuth(app);
export const provider=new GoogleAuthProvider();




