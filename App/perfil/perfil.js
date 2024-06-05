// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
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

// Logout button
const logoutButton = document.getElementById('logout-button'); // make sure this is the correct id for your logout button

let uid; // Declare uid at a higher scope

onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
        updateUserProfile(user);
        uid = user.uid; // Store uid
    } else {
        alert('You are not logged in');
        window.location.href = "../RegisterPage/register.html";
    }
});

function updateUserProfile(user) { 
    const fullName = user.displayName; // Assuming this is the full name
    const email = user.email;

    if (fullName) {
        const splitName = fullName.split(' ');
        const primeironome = splitName[0];
        const sobrenome = splitName.length > 1 ? splitName[splitName.length - 1] : ''; // If there's no last name, this will be an empty string

        document.getElementById('primeiro-nome').textContent = primeironome;
        document.getElementById('ultimo-nome').textContent = sobrenome;
    }

    document.getElementById('email').textContent = email;
}

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore();

function save() {
    var email= document.getElementById('email').value;
    var password= document.getElementById('password').value;
    var primeironome= document.getElementById('primeironome').value;
    var ultimonome= document.getElementById('ultimonome').value;

    setDoc(doc(db, 'users', uid), {
        email: email,
        password: password,
        primeironome: primeironome,
        ultimonome: ultimonome
    }).then(() => {
        alert('Saved');
    }).catch((error) => {
        console.error("Error updating user: ", error);
    });
}
