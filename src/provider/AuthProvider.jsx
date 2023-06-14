/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const profileUpdate = (profile) => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };
  const logInWithGoogle = (providerGoogle) => {
    setLoader(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    setLoader,
    createUser,
    signIn,
    profileUpdate,
    logInWithGoogle,
   
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
