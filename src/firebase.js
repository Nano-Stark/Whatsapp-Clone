import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6UwqqMWU9mefavP3pr6_eIVMYq2pz5_M",
    authDomain: "whatsapp-clone-99921.firebaseapp.com",
    projectId: "whatsapp-clone-99921",
    storageBucket: "whatsapp-clone-99921.appspot.com",
    messagingSenderId: "196388065809",
    appId: "1:196388065809:web:b878b1a4532fd0505657b0",
    measurementId: "G-449BGWJS88"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}; 
  export default db;