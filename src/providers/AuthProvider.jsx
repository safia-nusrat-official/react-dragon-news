import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { app } from "../firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null);

  const SignUp = (email, password, name = "") => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    if (!user) {
      console.log(user);
    }
    return () => unSubscribe();
  }, []);

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogInViaGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    return signInWithPopup(auth, provider);
  };
  const UpdateProfile = ({name, profilePhoto }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profilePhoto,
    });
  };
  const LogOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    SignUp,
    LogIn,
    LogOut,
    LogInViaGoogle,
    UpdateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
