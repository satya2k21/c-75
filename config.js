import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA2uwXVFQ5GhNKjwq1NEQqRznjtR4lLBXY",
  authDomain: "sdsa-fcf5b.firebaseapp.com",
  projectId: "sdsa-fcf5b",
  storageBucket: "sdsa-fcf5b.appspot.com",
  messagingSenderId: "157690852857",
  appId: "1:157690852857:web:e1c8a7e00718e3c3fa3928"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
