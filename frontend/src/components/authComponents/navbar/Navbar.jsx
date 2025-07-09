import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <p className='navbar-logo'>caoveniencia</p>
        <div className='navbar-links'>
            <Link to="/" className='link'>
                <p className='navbar-link'>Inicio</p>
            </Link>
            <Link to="/login" className='link'>
                <p className='navbar-link'>Login</p>
            </Link>
            <Link to="/register" className='link'>
                <p className='navbar-link'>Cadastro</p>
            </Link>
        </div>
    </div>
  )
}
