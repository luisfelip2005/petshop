import React, { useState } from 'react'
import HomeNavbar from '../../components/HomeNavbar/HomeNavBar'
import "./styles.css"
import './calendar.css';
import Calendar from 'react-calendar';

export default function Appointment() {
    const [checkedValue, setCheckedValue] = useState()
    const [value, onChange] = useState(new Date());
   
  return (
    <div>
        <HomeNavbar />
        <form>
            <p className='title'>Agendar</p>
            <p className='subtitle'>Selecione o serviço desejado</p>
            <div className="checkboxes-container">
                <div className="checkbox-container">
                    <input className='checkbox' checked={checkedValue == 1} name="choice" value={1} id="vac" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                    <label className='checkbox-label' htmlFor="vac">Vacinação</label>
                </div>
                <div className="checkbox-container">
                    <input className='checkbox' checked={checkedValue == 2} name="choice" value={2} id="bath" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                    <label className='checkbox-label' htmlFor="bath">Banho & Tosa</label>
                </div>
                <div className="checkbox-container">
                    <input className='checkbox' checked={checkedValue == 3} name="choice" value={3} id="consult" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                    <label className='checkbox-label' htmlFor="consult">Consulta</label>
                </div>
            </div>
            <p className='subtitle'>Informe os dados do pet</p>
            <div className="input-container">
                <div className="inputs">
                    <p className='appointment-input-label'>Nome do pet</p>
                    <input className='appointment-input' type="text" />
                    <p className='appointment-input-label'>Tipo de animal</p>
                    <input className='appointment-input' type="text" />
                    <p className='appointment-input-label'>Genero</p>
                    <input className='appointment-input' type="text" />
                    <p className='appointment-input-label'>Data de nascimento</p>
                    <input className='appointment-input' type="text" />
                </div>
                <div className="calendar-container">
                    <Calendar minDate={new Date()} onChange={onChange} value={value} />
                </div>
            </div>
            <button className='appointment-button'>Finalizar</button>
        </form>
    </div>
  )
}
