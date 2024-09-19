import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRouter = ({children}) => {
    const {isAuth} = useContext(AuthContext)

  if (!isAuth){
    return <Navigate to="/login" />
  }
  return children
  
}

export default PrivateRouter