const switchToSignup = document.getElementById('switch-to-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  const submitButton = document.getElementById("submit");
  const signupButton = document.getElementById("sign-up");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const main = document.getElementById("main");
  const createacct = document.getElementById("create-acct")
  
  const nameInput = document.getElementById("lawyer-name");
  const signupEmailIn = document.getElementById("email-signup");
//   const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const lawyerIDinput = document.getElementById("lawyer-id");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
  const createacctbtn = document.getElementById("create-acct-btn");
  
  const returnBtn = document.getElementById("return-btn");
  
  var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;
  var lname;
   var lawyerId;
  
  createacctbtn.addEventListener("click", function() {
    var isVerified = true;
    lname = nameInput.value;
    lawyerId = lawyerIDinput.value;
    signupEmail = signupEmailIn.value;
    console.log(signupEmailIn.value)

    signupPassword = signupPasswordIn.value;
    console.log(signupPasswordIn.value)
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    console.log(confirmSignUpPasswordIn.value)
    if(signupPassword != confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.")
        isVerified = false;
    }
    
    if(signupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
    
    if(isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        // set(ref(db, 'lawyer/'), {
        //   name: lname,
        // //   email: signupEmail,
        // //   id: lawyerId,
        // //   password: signupPassword
        // });
        set(ref(db, 'lawyer/'+user.uid), {
            name: lname,
            email: signupEmail,
            id: lawyerId,
            password: signupPassword
          });

        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert(errorMessage);
      });
    }
  });
  
  submitButton.addEventListener("click", function() {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success! Welcome back!");
        // window.alert("Success! Welcome back!");
        window.location.href = "/Lawyer-Client-System/LawyerSide/index2.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occurred. Try again.");
        window.alert("Error occurred. Try again.");
      });
  });
  
  signupButton.addEventListener("click", function() {
      main.style.display = "none";
      createacct.style.display = "block";
  });
  
  returnBtn.addEventListener("click", function() {
      main.style.display = "block";
      createacct.style.display = "none";
  });
