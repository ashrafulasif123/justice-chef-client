import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState({})
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // const userNamePhoto = (name, user) =>{
    //     console.log(user, name)
    //     // return updateProfile(result, {
    //     //     displayName: name
    //     //   })

    // }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logInWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            // setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])    
    // console.log(user)

    const authInfo = {
        user,
        createUser,
        logIn,
        logInWithGoogle,
        logInWithGithub,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;