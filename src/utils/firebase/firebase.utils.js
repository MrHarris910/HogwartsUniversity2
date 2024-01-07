import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider, 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2L5PYYcfICik4RT78kpSe-RYRY1_B1rM",
  authDomain: "university-2-db.firebaseapp.com",
  projectId: "university-2-db",
  storageBucket: "university-2-db.appspot.com",
  messagingSenderId: "681300185660",
  appId: "1:681300185660:web:dc2d1f2351054cc78ba939"
};
  
  // Initialize Firebase
  const firebaseApp =  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformaition = {displayname: ''}
  ) => {
        if (!userAuth) return;
        const userDocRef = doc(db, 'users', userAuth.uid);

        console.log(userDocRef);

        const userSnapshot = await getDoc(userDocRef);
        

        if(!userSnapshot.exists()) {
          const { displayName, email } = userAuth;
          const  createdAt = new Date();

          try {
            await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformaition,
            });
          } catch (error) {
            console.log('error creating the user', error.message);
          }
        }

        return userDocRef;

      };
