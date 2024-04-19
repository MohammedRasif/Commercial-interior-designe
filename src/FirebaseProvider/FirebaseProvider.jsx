import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fairbase/fairbase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const FirebaseProvider = ({children}) => {

    const [user,setUser]=useState(null)
    console.log(user)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }


    //google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logout=()=>{
        signOut(auth)
    }


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])



    const allValues={
        createUser,
        singInUser,
        googleLogin,
        logout
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;