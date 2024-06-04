// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPwLO74yLbwC7zPxmmCbezp-qmI80aXqY",
    authDomain: "as-project-28adf.firebaseapp.com",
    projectId: "as-project-28adf",
    storageBucket: "as-project-28adf.appspot.com",
    messagingSenderId: "240319602973",
    appId: "1:240319602973:web:af5a91f55128db191ac1f4",
    measurementId: "G-XY9MX2HE6W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  

  //submit button

  const submit = document.getElementById('signup');
  submit.addEventListener('click', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          alert('Creating account...');
          window.location.href = "../login/login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error: ' + errorMessage);
            // ..
        });
 });
