import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyBJdANEjwPfSZIfI-0jb3OazYpvvxpi_ts",
  authDomain: "newsletter-aee05.firebaseapp.com",
  databaseURL: "https://newsletter-aee05-default-rtdb.firebaseio.com",
  projectId: "newsletter-aee05",
  storageBucket: "newsletter-aee05.appspot.com",
  messagingSenderId: "383587972259",
  appId: "1:383587972259:web:69e8623697e86ab82c7b16"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();