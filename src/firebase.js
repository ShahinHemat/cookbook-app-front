import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP45maYTwyHvEnZMJNUtPOpIUY9FR3cHA",
  authDomain: "recipeapp-2fd48.firebaseapp.com",
  projectId: "recipeapp-2fd48",
  storageBucket: "recipeapp-2fd48.appspot.com",
  messagingSenderId: "758583382505",
  appId: "1:758583382505:web:89bb79b9a4615f76d17b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)