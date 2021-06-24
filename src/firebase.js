import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9bFutXvQKJA0xi3t5uPfGHricw5_reVs",
    authDomain: "mern-tiktok-vb.firebaseapp.com",
    databaseURL: "https://mern-tiktok-vb.firebaseio.com",
    projectId: "mern-tiktok-vb",
    storageBucket: "mern-tiktok-vb.appspot.com",
    messagingSenderId: "999063438153",
    appId: "1:999063438153:web:e197929db74cd617711098"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider}; //explicitly
  export default db; //implicitly