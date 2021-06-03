import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLWVKwTeXtGT5KnAYFk_aOafz4tZ9_wf8",
    authDomain: "project-management-21264.firebaseapp.com",
    projectId: "project-management-21264",
    storageBucket: "project-management-21264.appspot.com",
    messagingSenderId: "899858816206",
    appId: "1:899858816206:web:fe8eca0fe7c97aefde049f",
    measurementId: "G-65P0X8WECG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;