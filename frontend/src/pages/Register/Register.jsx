import React, { useState } from 'react'
import "./styles.css"
import LeftScreen from '../../components/authComponents/LeftScreen/LeftScreen'
import Navbar from '../../components/authComponents/navbar/Navbar'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(name, email, password, confirmPassword);
    try{
      const response = await api.post(`/user/register/`, { name, email, password, confirmPassword })
      const data = response.data
      console.log(data);
      if (response.status == 201) {
        alert(data.msg)
        navigate('/login')
      }
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
                <h1 className='form-title'>Register</h1>
                <form className='form' action="">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' className='input' type="text" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className='input' type="text" />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' className='input' type="text" />
                  <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' className='input' type="text" />
                  <button onClick={handleRegister} className='login-button'>Register</button>
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}
