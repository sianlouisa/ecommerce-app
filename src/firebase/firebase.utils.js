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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// document reference to user
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// create a snapshot of the signed in user
	const snapShot = await userRef.get();

	// check if the snapshot doesn't exist in database and create new user
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("Error creating user in db", err);
		}
	}

	return userRef;
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger Google pop up for sign in
provider.setCustomParameters({ prompt: "select_account" });
// pass Google auth provider to sign in with popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
