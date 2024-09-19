import React from 'react'
import { createContext,useState } from 'react'

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(false)

    const [token,setToken] = useState('')
    const Login = (tkn)=>{
        setIsAuth(true)
        setToken(tkn)
    }
    const Logout = ()=>{
        setIsAuth(false)
        setToken('')
    }
  return <AuthContext.Provider value={{isAuth,Login,Logout,token}}>
        {children}
    </AuthContext.Provider>
  
}

export default AuthContextProvider