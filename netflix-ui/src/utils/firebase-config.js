import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDE14b0N4TX9X2oFACrGLyHxAb4FSdZw2E",
  authDomain: "react-netflix-clone-db1a1.firebaseapp.com",
  projectId: "react-netflix-clone-db1a1",
  storageBucket: "react-netflix-clone-db1a1.appspot.com",
  messagingSenderId: "120289099564",
  appId: "1:120289099564:web:30f5013197011277b6f689",
  measurementId: "G-YSBCZ93XF1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app)
