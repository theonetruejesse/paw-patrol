import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
// import firebase from "firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserId, setCurrentUserId] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function createUser(profile) {
    db.collection("people")
      .add(profile)
      .then((docRef) => setCurrentUserId(docRef.id));
  }

  async function getUser(email) {
    db.collection("people")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setCurrentUserId(doc.id);
        });
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    currentUserId,
    login,
    signup,
    logout,
    createUser,
    getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
