// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/*
const config = {
  apiKey: process.env.APP_VUE_API_KEY,
  authDomain: process.env.APP_VUE_AUTHDOMAIN,
  projectId: process.env.APP_VUE_PROJECTID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_VUE_MESSAGGING_SENDERID,
  appId: process.env.APP_VUE_APPID,
  measurementId: process.env.APP_VUE_MEASUREMENTID
}
*/
const config = {
  apiKey: "AIzaSyA1nIjX8_SlfVDMLJStBROP_wanhkbNdw4",
  authDomain: "fir-auth-3eafe.firebaseapp.com",
  projectId: "fir-auth-3eafe",
  storageBucket: "fir-auth-3eafe.appspot.com",
  messagingSenderId: "652983323520",
  appId: "1:652983323520:web:ac1926c5b3c97eff8b4f65",
  measurementId: "G-Z424G5TCZ1"
}



const myFirebase = firebase.initializeApp(config)
const db = myFirebase.firestore()

export default db
