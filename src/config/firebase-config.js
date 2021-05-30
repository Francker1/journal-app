import firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACTXJ3jzATryzUaJv9-bhefNKaroIsmXk",
    authDomain: "journal-app-49516.firebaseapp.com",
    projectId: "journal-app-49516",
    storageBucket: "journal-app-49516.appspot.com",
    messagingSenderId: "776142605973",
    appId: "1:776142605973:web:10d8c942c1dc1aaaf6d59c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}