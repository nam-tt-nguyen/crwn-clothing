import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvnwESH8nAjmp2Sti452EVKP0SeHWuoco",
    authDomain: "crwn-db-f3ccf.firebaseapp.com",
    projectId: "crwn-db-f3ccf",
    storageBucket: "crwn-db-f3ccf.appspot.com",
    messagingSenderId: "405567480905",
    appId: "1:405567480905:web:756346a5d98170bb984b98",
    measurementId: "G-8TZV6ZRKM5"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;