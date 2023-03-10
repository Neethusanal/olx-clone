import firebase from 'firebase';
import 'firebase/firebase-firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAZYOCAIz5kH8QRS1RO1tYueJx23itlZ-E",
    authDomain: "fir-385c2.firebaseapp.com",
    projectId: "fir-385c2",
    storageBucket: "fir-385c2.appspot.com",
    messagingSenderId: "831131567795",
    appId: "1:831131567795:web:d535d4b328f817a73c92c6",
    measurementId: "G-SGER6YDMN4"
  };
 export default  firebase.initializeApp(firebaseConfig)