import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
    apiKey: {process.env.process.env.REACT_APP_GOOGLE_MAPS_API_KEY},
    authDomain: "trekkingnew.firebaseapp.com",
    databaseURL: "https://trekkingnew.firebaseio.com",
    projectId: "trekkingnew",
    storageBucket: "gs://trekkingnew.appspot.com",
    messagingSenderId: "940007446386",
    appId: "1:940007446386:web:6cf5cacc12b6ad6304efeb",
    measurementId: "G-358W4QNLNF"
}

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
    }

    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch( err => {
            console.log(err);
            return err;
        });
        return user;
    }

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch( err => {
            console.log(err);
            return err;
        });
        return user;
    }

    async logout(){
        await firebase.auth().signOut().catch(err => {
            console.log(err);
        });
    }

    async getUserState(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }
       
    


}

export default new Firebase();
