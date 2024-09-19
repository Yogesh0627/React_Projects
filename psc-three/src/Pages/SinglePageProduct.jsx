import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
const SinglePageProduct = () => {
  const { id } = useParams()
  // console.log('Id is',id)


  const [productData, setProductData] = useState([])


  useEffect(() => {
    fetchAndUpdate()
  }, [])
  let ProductUrl = `http://localhost:3000/products/${id}`
  const getData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.log('Error is :-', error)

    }
  }
  const fetchAndUpdate = async () => {
    try {
      const present = await getData(ProductUrl)
      // console.log(present)
      setProductData(present)
    } catch (error) {
      console.log("error after fetching :-", error)
    }
  }
  // console.log(typeof productData)

  // const mainProduct = productData.map((e) => (<div key={e.id}>

  //   <h3>{card.category}</h3>
  //   <h1>{card.title}</h1>
  //   <p>{card.description}</p>
  //   <img src={card.image} width='500px' alt={card.title} />
  //   <h3>Price : {card.price}</h3>
  //   <h4>Ratings :- {card.rating.rate} / {card.rating.count}</h4>


  // </div>))

  // console.log(productData.rating.rate)
  // console.log(productData.rating.count)
  return (
    <div>
      <h1>SinglePageProduct</h1>
      {/* {mainProduct} */}

      <h1>{productData.id} {' . '}{productData.category}</h1>
    <h1>{productData.title}</h1>
    <p>{productData.description}</p>
     <img src={productData.image} width='500px' alt={productData.title} />
     <h3>Price : {productData.price}</h3>
    <h4>Ratings :- {`${productData?.rating?.rate} / ${productData?.rating?.count}`}</h4>
    </div>
  )
}

export default SinglePageProduct