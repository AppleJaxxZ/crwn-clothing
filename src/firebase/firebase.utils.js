import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyDRuliXoOzTYCNZeyElG2ubHvb1bFf55vo",
    authDomain: "crown-db-e55fb.firebaseapp.com",
    projectId: "crown-db-e55fb",
    storageBucket: "crown-db-e55fb.appspot.com",
    messagingSenderId: "81884311322",
    appId: "1:81884311322:web:ce3caf0933f427107606a3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;