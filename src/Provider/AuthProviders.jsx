import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };




  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };




  const logOut = (email, password) => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName:  name, photoURL: photo
      })
  }



  const googleProvider = new GoogleAuthProvider();

  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // const googleProvider = new GoogleAuthProvider();
  // const googleLogin = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
  //       setUser(loggedInUser);
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  



  const gitHubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log('Logged in user inside auth', loggedUser)
      setUser(loggedUser);
      if(loggedUser){
        axios.post('http://localhost:5000/jwt', {email: loggedUser.email})
        .then(data =>{
          console.log(data.data.token)
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
     
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogin,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
