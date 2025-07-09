import React, { useContext } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'

export default function HomeNavbar() {
    const { userLoggedIn } = useContext(DataContext)
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <p className='logo'>CAOVENIENCIA</p>
            </div>
            
            <div className='shortcuts'>
                <Link className='link'>
                    <p className='home-navbar-link'>Inicio</p>
                </Link>
                <Link className='link'>
                    <p className='home-navbar-link'>Serviços</p>
                </Link>
                <Link className='link'>
                    <p className='home-navbar-link'>Favoritos</p>
                </Link>
                {!userLoggedIn && <Link to="/login" className='link'>
                    <p className='home-navbar-link'>Login</p>
                </Link>}

                {!userLoggedIn && <Link to="/register" className='link'>
                    <p className='home-navbar-link'>Cadastro</p>
                </Link>}
            </div>
            
        </div>
    )
}
