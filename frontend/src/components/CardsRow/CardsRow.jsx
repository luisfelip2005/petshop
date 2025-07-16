import React from 'react'
import "./styles.css"
import consulta from "../assets/consulta.svg"
import vacina from "../assets/vacina.svg"
import produto from "../assets/produtos.svg"
import banho from "../assets/banho.svg"
import { useNavigate } from 'react-router-dom'

export default function CardsRow() {
    const navigate = useNavigate()

  return (
    <div>
        <p className='row-title'>Conheça nossos serviços</p>
        <div className='cards-container'>
            <div className='card'>
                <p className='card-title'>Vacinação</p>
                <div className='image-container'>
                    <img className='card-img' src={vacina} />
                </div>
                <button onClick={() => navigate("/appointment")} className='card-button'>
                    <p>Agendar</p>
                </button>
            </div>
            <div className='card'>
                <p className='card-title'>Banho & Tosa</p>
                <div className='image-container'>
                    <img className='card-img' src={banho} />
                </div>
                <button onClick={() => navigate("/appointment")} className='card-button'>
                    <p>Agendar</p>
                </button>
            </div>
            <div className='card'>
                <p className='card-title'>Consulta</p>
                <div className='image-container'>
                    <img className='card-img' src={consulta} />
                </div>
                <button onClick={() => navigate("/appointment")} className='card-button'>
                    <p>Agendar</p>
                </button>
            </div>
            <div className='card'>
                <p className='card-title'>Produtos</p>
                <div className='image-container'>
                    <img className='card-img' src={produto} />
                </div>
                <button onClick={() => navigate("/appointment")} className='card-button'>
                    <p>Agendar</p>
                </button>
            </div>
        </div>
    </div>
  )
}
