import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// import firebase from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpFLmmyEQrtRXQRcnzFIvgFR5_hmBr11s",
    authDomain: "lawyer-client-30f63.firebaseapp.com",
    projectId: "lawyer-client-30f63",
    storageBucket: "lawyer-client-30f63.appspot.com",
    messagingSenderId: "1011863487747",
    appId: "1:1011863487747:web:ce7f2e502b6af0789b5536",
    measurementId: "G-HGNPGCECSE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const auth = getAuth(app);
  



//   auth.onAuthStateChanged(user => {
//     console.log(user.uid)
//     if (user) {
//         getUserData(user.uid)
        
//     }
// })
// const dbRef = firebase.database().ref();
// dbRef.child("lawyer").child(userId).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// console.log(auth.currentUser)
// function getUserData(uid) {
//     firebase.database().ref('lawyer/' + uid).once("value", snap => {
//         console.log(snap.val())
//     })
// }

// console.log(userId)


  // const read=ref(database, 'lawyer/'+'name/name')
  // onValue(read, (snapshot) => {
  //   const data = snapshot.val();
  //   // updateStarCount(postElement, data);
  //   console.log(data)
  //   hello(data)
  // });


  firebase.database().ref().on("value", function(snapshot) {
    console.log(snapshot.val().lawyer);
    hello(snapshot.val().lawyer.name)
  }, function (error) {
    console.log("Error: " + error.code);
 });