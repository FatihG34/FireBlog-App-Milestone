import firebase from "./firebase";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    sendPasswordResetEmail, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from 'firebase/auth'



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

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        navigate('/');
        // toastSuccessNotify('Logged in successfully!');
        console.log(userCredential);
    } catch (err) {
        // toastErrorNotify(err.message);
        console.log(err);
    }
};

export const userObserver = (setCurrentUser) => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
            // console.log(user)
        } else {
            // User is signed out
            setCurrentUser(false);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};

export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // toastWarnNotify('Please check your mail box!');
            alert("Please check your mail box!");
        })
        .catch((err) => {
            // toastErrorNotify(err.message);
            alert(err.message);
            // ..
        });
};

export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            navigate('/');
            // toastSuccessNotify('Logged out successfully!');
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
};