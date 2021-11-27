import firebase from "firebase"
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyBTOJrc0WXBu-KaRqz_Oq-r9S_FrhJ_Q-8",
  authDomain: "elibrary-4bd6b.firebaseapp.com",
  projectId: "elibrary-4bd6b",
  storageBucket: "elibrary-4bd6b.appspot.com",
  messagingSenderId: "317405697331",
  appId: "1:317405697331:web:921944bd7ab035ccd95a46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()