import firebase from 'firebase';

const config = {
    apiKey: "<API_KEY>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>"
  };
var fire = firebase.initializeApp(config);
export default fire;