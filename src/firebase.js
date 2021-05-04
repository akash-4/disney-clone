import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABY-mX11UGrpu-OAUId8OTbnB-IRu85-o",
  authDomain: "disney-clone-new-1.firebaseapp.com",
  projectId: "disney-clone-new-1",
  storageBucket: "disney-clone-new-1.appspot.com",
  messagingSenderId: "936718301652",
  appId: "1:936718301652:web:cade5201d6f328b5dcfe41",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
