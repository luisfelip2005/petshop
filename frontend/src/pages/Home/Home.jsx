import React, { useEffect, useState, useContext } from 'react'
import HomeNavbar from '../../components/HomeNavbar/HomeNavBar'
import CardsRow from '../../components/CardsRow/CardsRow'
import Product from '../../components/Product/Product'
import api from '../../services/api'
import "./styles.css"
import patas from "../../components/assets/patas.svg"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("/product/all")
      console.log(data);
      setProducts(data)
      return data
    }
    getData()
  }, [])
  return (
    <div className='home-container'>
        <HomeNavbar />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#863FE1" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className='home-impact-phrase-container'>
          <p className='home-impact-phrase'>Seu <span className='yellow-text'>mundo animal</span> em <br /> <span className='yellow-text'>um lugar só</span></p>
          <img src={patas} height={250} />
        </div>
        <CardsRow />
        <p className='product-title'>Produtos</p>
        <div className='product-container'>
          <div className="products">
            {products.map((product, index) => {
              return (
                <Product name={product.name} price={product.price} category={product.category} key={index} />
              )
            })}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#863FE1" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,154.7C672,181,768,203,864,202.7C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}
