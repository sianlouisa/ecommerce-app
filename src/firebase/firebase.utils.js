import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCZUR-gqwn3xPCF2PnCB2_hnIvirzDuHwg",
	authDomain: "ecommerce-app-db-c0e10.firebaseapp.com",
	databaseURL: "https://ecommerce-app-db-c0e10.firebaseio.com",
	projectId: "ecommerce-app-db-c0e10",
	storageBucket: "",
	messagingSenderId: "623187999694",
	appId: "1:623187999694:web:ba983657d74c9ad177099f",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger Google pop up for sign in
provider.setCustomParameters({ prompt: "select_account" });
// pass Google auth provider to sign in with popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
