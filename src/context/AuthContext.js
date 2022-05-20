import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import {useContext,createContext, useState, useEffect} from 'react';
import auth from '../firebase';

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState("")

    const signup = (email,password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
      return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
      signOut(auth)
    }
    
    useEffect(()=> {
      const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
      })
      return unsubscribe; 
    }, [])
    const value = {
      currentUser,
      signup,
      login,
      logout,
      resetPassword,
    };
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
