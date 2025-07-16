import React, { useEffect, useState } from 'react'
import HomeNavbar from '../../components/HomeNavbar/HomeNavBar'
import "./styles.css"
import './calendar.css';
import Calendar from 'react-calendar';
import api from "../../services/api"

export default function Appointment() {
    const [checkedValue, setCheckedValue] = useState()
    const [availableHours, setAvailableHours] = useState([])
    const [hourSelected, setHourSelected] = useState()
    const [petname, setPetname] = useState()
    const [gender, setGender] = useState()
    const [birthday, setBirthday] = useState()
    const [animal, setAnimal] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [service, setService] = useState()


    const getAvailableHours = async (date) => {
        try {
            const { data } = await api.get(`/appointment/hours/?date=${date}`)
            console.log(data);
            setAvailableHours(data)
        } catch (err) {
            console.log(err);
        }
    }

    const handleHourSelected = async (e, index, h) => {
        e.preventDefault()
        setHour(h)
        setHourSelected(index)
    }

    const handleDateChange = async (date) => {
    // Transforma para 'YYYY-MM-DD'
    const formatted = await date.toISOString().split('T')[0];
    setDate(formatted);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        switch (parseInt(checkedValue)) {
            case 1:
                setService('VACINA')
                break
            case 2:
                setService('BANHO E TOSA')
                break
            case 3:
                setService('CONSULTA')
                break
        }   
        
        // mecher nisso aqui amanha
        const info = {
        // "id": 1,
        "service": service,
        "datetime": `${date} ${hour}`,
        "petname": petname,
        "birthday": birthday,
        // "created_at": "2025-07-08T19:44:06.481171Z",
        "animal":animal,
        "gender": gender,
        "user": 3
        }
        console.log(info);
        
        try {
            const { data } = await api.post("/appointment/", info)
            console.log(data);
        } catch (err) {
            console.log(err);
        } 

    }

    useEffect(() => {
        getAvailableHours(date)
    }, [date])
   
  return (
    <div>
        <HomeNavbar />
        <form>
            <p className='title'>Agendar</p>
            <div className='appointment-container'>
                <div className='input-container'>
                    <p className='subtitle'>Selecione o serviço desejado</p>
                    <div className="checkboxes-container">
                        <div className="checkbox-container">
                            <input className='checkbox' readOnly checked={checkedValue == 1} name="choice" value={1} id="vac" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                            <label className='checkbox-label' htmlFor="vac">Vacinação</label>
                        </div>
                        <div className="checkbox-container">
                            <input className='checkbox' readOnly checked={checkedValue == 2} name="choice" value={2} id="bath" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                            <label className='checkbox-label' htmlFor="bath">Banho & Tosa</label>
                        </div>
                        <div className="checkbox-container">
                            <input className='checkbox' readOnly checked={checkedValue == 3} name="choice" value={3} id="consult" type="checkbox" onClick={(e) => setCheckedValue(e.target.value)} /> 
                            <label className='checkbox-label' htmlFor="consult">Consulta</label>
                        </div>
                    </div>
                    <p className='subtitle'>Informe os dados do pet</p>
                        <div className="inputs">
                            <p className='appointment-input-label'>Nome do pet</p>
                            <input placeholder='ex: Astolfo' value={petname} onChange={(e) => setPetname(e.target.value)} className='appointment-input' type="text" />
                            <p className='appointment-input-label'>Tipo de animal</p>
                            <input placeholder='ex: Cachorro' value={animal} onChange={(e) => setAnimal(e.target.value)} className='appointment-input' type="text" />
                            <p className='appointment-input-label'>Genero</p>
                            <select onChange={(e) => setGender(e.target.value)} className='appointment-input select' name="" id="">
                                <option value="SELECT">SELECT</option>
                                <option value="MASCULINO">MASCULINO</option>
                                <option value="FEMININO">FEMININO</option>
                            </select>
                            <p className='appointment-input-label'>Data de nascimento</p>
                            <input value={birthday} onChange={(e) => setBirthday(e.target.value)} className='appointment-input' type="date" />
                        </div>
                    </div>
                    <div className="calendar-container">
                        <Calendar minDate={new Date()} onChange={handleDateChange} />
                        <div className="available-hours-container">
                            {availableHours.map((h, index) => {
                                return(
                                    <button key={index} onClick={(e) => handleHourSelected(e, index, h.hour)} className={hourSelected == index ? 'available-hour button-selected' : 'available-hour'}>{h.hour.substring(0, 5)}</button>
                                )
                            })}
                        </div>
                </div>
            </div>
            <div className="button-container">
                <button onClick={(e) => handleSubmit(e)} className='appointment-button'>Finalizar</button>
            </div>
        </form>
    </div>
  )
}
