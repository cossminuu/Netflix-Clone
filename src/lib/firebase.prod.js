import Firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const config = {
    //your api
}


const firebase = Firebase.initializeApp(config);


export { firebase };
