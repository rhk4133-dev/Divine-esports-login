import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu0VVJb6zVkWh-d2ZED6YvvAmpfyqlk",
  authDomain: "login-93d2c.firebaseapp.com",
  projectId: "login-93d2c",
  storageBucket: "login-93d2c.firebasestorage.app",
  messagingSenderId: "550316337640",
  appId: "1:550316337640:web:6d5613ab4c0c888faa5c5d",
  measurementId: "G-FCK4DCD394"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTER
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Registration Successful 🔥");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGIN
window.login = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};

// PROTECT DASHBOARD
window.checkAuth = function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const emailText = document.getElementById("userEmail");
      if (emailText) {
        emailText.innerText = "Logged in as: " + user.email;
      }
    } else {
      window.location.href = "login.html";
    }
  });
};
