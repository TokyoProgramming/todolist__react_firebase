import firebase from "firebase";


const firebaseConfig =  ({
  apiKey: "AIzaSyDod7xHc5HJkFzmbsWvnKnoMFNhnEqN76Y",
  authDomain: "todo-app-9a229.firebaseapp.com",
  databaseURL: "https://todo-app-9a229.firebaseio.com",
  projectId: "todo-app-9a229",
  storageBucket: "todo-app-9a229.appspot.com",
  messagingSenderId: "101923820194",
  appId: "1:101923820194:web:a6f89d96936a20f09afdfb",
  measurementId: "G-HE9WYHS5CG"
});

const firebaseApp =
    firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;




