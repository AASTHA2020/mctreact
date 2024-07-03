// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA88_lUfm-a8fANTcs2naGDsivfz8z4fE4",
    authDomain: "yt-c8b3d.firebaseapp.com",
    projectId: "yt-c8b3d",
    storageBucket: "yt-c8b3d.appspot.com",
    messagingSenderId: "759371004584",
    appId: "1:759371004584:web:9af9c7b69fe9be7294609d",
    measurementId: "G-11819QFVH4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
