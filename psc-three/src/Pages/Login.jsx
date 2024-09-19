import React from 'react'
import { useContext ,useState } from 'react'
import Button from '../Components/Button'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

// import 
const Login = () => {
  const {isAuth,Login,Logout} = useContext(AuthContext)
  const [email,setEmail] = useState('eve.holt@reqres.in ')
  const [password,setPassword] = useState('cityslicka')

  const handleLogin = ()=>{
    const userDetails ={
      email,
      password
    }
    // console.log(userDetails)

    fetch('https://reqres.in/api/login',{
      method:'POST',
      headers:{
        "Content-Type":'application/json'
      },
      body :JSON.stringify(userDetails)
    }).then((response)=>response.json())
    .then((data)=>{console.log(data.token)
    Login(data.token)})
    .catch((err)=>console.log(err))
  }

  if (isAuth){
    return <Navigate to='/' />
  }
  return (
    <div>
      <h1>Login</h1>
      <div style={{display:'flex',flexDirection:'column', gap:'20px', margin:'auto'}}>      
        <label style={{marginLeft:'10px'}} htmlFor="">User Email {' '} {':-'} {' '}
        <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} /></label>
        <label style={{marginLeft:'12px'}} htmlFor="">Password {" "} {':-'} {' '}
          <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/></label>
      </div>
      <div style={{boxSizing:'border-box',display:'flex',justifyContent:'center'}}>
        <Button btnText='Log in' onClick={handleLogin}/>
        {/* <Button btnText='Log out' onClick={Logout}/> */}
      </div>

    </div>
  )
}

export default Login