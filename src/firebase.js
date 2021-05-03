  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCBa0iGXDoAiOxPBiyxRYDxmUZNFNQ7cc",
    authDomain: "instagram-clone-react-b742d.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-b742d-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-b742d",
    storageBucket: "instagram-clone-react-b742d.appspot.com",
    messagingSenderId: "193043758502",
    appId: "1:193043758502:web:3bb9ad99ced0fd9bfc6367",
    measurementId: "G-W7R204RF4R"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
  //export default db;