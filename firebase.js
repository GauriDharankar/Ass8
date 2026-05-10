import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyA-64Jo2YL17A9qs9s7WfQo_ATpLLaT2u8",
  authDomain: "assignment8-96269.firebaseapp.com",
  projectId: "assignment8-96269",
  storageBucket: "assignment8-96269.firebasestorage.app",
  messagingSenderId: "1083565284139",
  appId: "1:1083565284139:web:2a041117305ba81b75436e",
  measurementId: "G-928HL878J3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };