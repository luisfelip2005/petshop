import React from 'react'
import "./styles.css"
import patas from "../../assets/patas.svg"


export default function LeftScreen() {
  return (
    <div className='left-container'>
        <div />
        <div />
        <div className='phrase-container'>
            <p className='impact-phrase'>Seu <span className='yellow-text'>mundo animal</span> em <br /> <span className='yellow-text'>um lugar só</span></p>
        </div>
        <div className='patas-container'>
            <img src={patas} className='patas-img' />
        </div>
    </div>
  )
}
