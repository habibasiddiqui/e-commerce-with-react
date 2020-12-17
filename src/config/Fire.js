import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCHLvwAcZ45XdE9Eljbf484OIneFb6V3Pw",
    authDomain: "e-commerce-react-481ed.firebaseapp.com",
    projectId: "e-commerce-react-481ed",
    storageBucket: "e-commerce-react-481ed.appspot.com",
    messagingSenderId: "618074418009",
    appId: "1:618074418009:web:73574f6695b3684ac3fa48"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;