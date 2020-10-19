import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCwlQTG2YIbXsf9luuciNEVQOpNcx-pbkg",
    authDomain: "whatsapp-mern-b8063.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-b8063.firebaseio.com",
    projectId: "whatsapp-mern-b8063",
    storageBucket: "whatsapp-mern-b8063.appspot.com",
    messagingSenderId: "209810945830",
    appId: "1:209810945830:web:a35fac3aa2f421031b33e7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth =   firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider};
  export default db;