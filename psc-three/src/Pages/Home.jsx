import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Button from '../Components/Button'

const Home = () => {
  const { isAuth, token, Logout, Login } = useContext(AuthContext)
  return (
    <div>
      <h1>Home </h1>
      {isAuth === true ? (<div>
        <h1>Token :- {token}</h1>
        <Button btnText='Log out' onClick={Logout} />
      </div>) : (
        ""
      )}

      <p>
      email :- eve.holt@reqres.in 
      password:- cityslicka</p>

    </div>
  )
}

export default Home

// eve.holt@reqres.in
// cityslicka