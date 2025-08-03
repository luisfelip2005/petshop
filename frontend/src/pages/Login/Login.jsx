import React, { useContext, useState } from 'react'
import "./styles.css"
import LeftScreen from '../../components/authComponents/LeftScreen/LeftScreen'
import Navbar from '../../components/authComponents/navbar/Navbar'
import api from '../../services/api'
import { DataContext } from '../../contexts/DataContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { userLoggedIn, setUserLoggedIn, user_id, setUserId } = useContext(DataContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email, password);
    try {
      const { data } = await api.post("/user/login", { email, password })
      console.log(data);
      setUserLoggedIn(true)
      navigate("/")
      console.log(data.user_id);
      setUserId(data.user_id)
      console.log(user_id);
      
      alert(data.msg)
    } catch(err) {
      console.log(err);
      console.log(err.response.data.msg);
      
      alert(err.response.data.msg)
    }
  }

  return (
    <div className='main-container'>
      <Navbar />
      <div className='login-container'>
          <LeftScreen />

          <div className='right-container'>
              <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form className='form' action="">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className='input' type="text" />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='input' type="text"  />
                  <button onClick={handleLogin} className='login-button'>Login</button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}
