import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlxRW4tK5OVBrrXVHC5eSpgK0SDVg-uU8",
  authDomain: "project-x-9498c.firebaseapp.com",
  projectId: "project-x-9498c",
  storageBucket: "project-x-9498c.appspot.com",
  messagingSenderId: "280665118148",
  appId: "1:280665118148:web:45cadf76e841190987c091",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
