import React from 'react'
import HomeNavbar from '../../components/HomeNavbar/HomeNavBar'
import "./styles.css"

export default function Appointment() {
  return (
    <div>
        <HomeNavbar />
        <form>
            <p>Selecione o serviço desejado</p>
            <div className="checkbox-container">
                <input id="vac" name='vac' type="checkbox" /> 
                <label htmlFor="vac">Vacinação</label>
                <input id="bath" name='bath' type="checkbox" /> 
                <label htmlFor="bath">Banho & Tosa</label>
                <input id="consult" name='consult' type="checkbox" /> 
                <label htmlFor="consult">Consulta</label>
            </div>
            <p>Informe os dados do pet</p>
            <div className="input-container">
                <div className="inputs">
                    <p>Nome do pet</p>
                    <input type="text" />
                    <p>Tipo de animal</p>
                    <input type="text" />
                    <p>Genero</p>
                    <input type="text" />
                    <p>Data de nascimento</p>
                    <input type="text" />
                </div>
                <div className="calendar">
                    <p>Calendar</p>
                </div>
            </div>
            <button>Finalizar</button>
        </form>
    </div>
  )
}
