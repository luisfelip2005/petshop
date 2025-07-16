import React, { useEffect, useState } from 'react'
import "./styles.css"
import roupa from "../assets/roupa.webp"
import brinquedo from "../assets/brinquedo.webp"
import coleira from "../assets/coleira.webp"
import shampoo from "../assets/shampoo.webp"
import racao from "../assets/racao.webp"
import compra from "../assets/compra.svg"

export default function Product({ name, price, category }) {
  const [imageURL, setImageURL] = useState() 
  const categoryImages = [
    ["ALIMENTO", racao],
    ["BRINQUEDO", brinquedo],
    ["PERFUME", shampoo],
    ["ROUPA", roupa],
    ["OUTRO", coleira]
  ]

  useEffect(() => {
    categoryImages.forEach((cat) => {
        if (cat[0] === category)  {
          setImageURL(cat[1])
          console.log(cat[0]);
        }
    })
  }, [])

  return (
    <div className='product'>
      <div>
        <img className='product-img' src={imageURL} alt="" />
        <p className='product-name'>{name}</p>
        <p className='product-price'>R$ {price}</p>
      </div>
      <div className='product-button-container'>
        <button className='product-button'><img src={compra} height={20} />Comprar</button>
      </div>
    </div>
  )
}
