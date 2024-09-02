import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function useUserAuth(){
    return useContext(userAuthContext);
}

// eslint-disable-next-line react/prop-types
export function UserAuthContextProvider({children}){

    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const logInWithGoogle = () =>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            console.log(user);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    const userValue = {
        currentUser,
        signUp,
        logIn,
        logOut,
        logInWithGoogle
    }

    return(
        <userAuthContext.Provider value={userValue}>{children}</userAuthContext.Provider>
    );
}