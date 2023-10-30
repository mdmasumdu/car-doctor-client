/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState();

    const [loading,setloading] =useState(true);

    const googleProvider = new GoogleAuthProvider();

    // create user  with email and password
    const registeruser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

// sign in with email and password

const login =(email,password)=>{
    setloading(true)
  return  signInWithEmailAndPassword(auth,email,password)
}



    // login with google
    const loginWithgoogle =()=>{
        setloading(true)

      return signInWithPopup(auth,googleProvider)
        

    }


    // logout
    const logout=()=>{
       return   signOut(auth)
    }

    // state observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
                      setUser(currentuser)
                      setloading(false)
        })

        return ()=>{
            return unsubscribe()
        }
    },[])


    console.log(user)
    const authinfo ={

      loginWithgoogle,
      registeruser,
      login,
      loading,
      user,
      logout
    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;