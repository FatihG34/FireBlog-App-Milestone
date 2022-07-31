import firebase from "./firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'



const auth = getAuth(firebase);

export const createUser = async (email, password, navigate, displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });
        // toastSuccessNotify('Registered successfully!');
        navigate('/');
        console.log(userCredential);
    } catch (err) {
        // toastErrorNotify(err.message);
    }
};

export const userObserver = (setCurrentUser) => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
            // User is signed out
            setCurrentUser(false);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};