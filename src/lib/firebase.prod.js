import Firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyAD7Pc8CxvMWUF1nBYnigI8BlJDaj7U_Bw",
    authDomain: "netflix-clone-53030.firebaseapp.com",
    databaseURL: "https://netflix-clone-53030.firebaseio.com",
    projectId: "netflix-clone-53030",
    storageBucket: "netflix-clone-53030.appspot.com",
    messagingSenderId: "468334228041",
    appId: "1:468334228041:web:208db6ff29a3ad5d594598",
    measurementId: "G-Z0DJ0TH7WM"
}


const firebase = Firebase.initializeApp(config);


export { firebase };