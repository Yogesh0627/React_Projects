import React from 'react'
import { useState, useEffect } from 'react'
import {Link , NavLink,Navigate, useSearchParams} from 'react-router-dom'
import Pagination from '../Components/Pagination'


const getCurrentPageURL = (value)=>{
  value = Number(value)
  if (typeof value === undefined && value <= 0){
    value = 1
  }

  if (!value){
    value =1 
  }
  return value;
}
const Products = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [err, setErr] = useState(false)
  const [searchParams,setSearchParams] = useSearchParams()
  const [page,setPage] = useState(getCurrentPageURL(searchParams.get('page')||1))
  const [totalCount,setTotalCount] = useState(0)
  const [orderBy,setOrderBy] = useState('')
  const [filterBy,setFilterBy] = useState('')



  useEffect(() => {
    fetchAndUpdate(page)
  }, [page,orderBy,filterBy])

  useEffect(()=>{
    let paramObj ={page,orderBy,filterBy}
    if (orderBy){
      paramObj.orderBy = orderBy
    }
    if (filterBy) {
      paramObj.filterBy  = filterBy
    }
    setSearchParams(paramObj)
  },[page,orderBy,filterBy])
  const getData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data.headers,data)
      return {totalCount:+response.headers.get('X-Total-Count'),data}
    } catch (error) {
      console.log("error is not valid", error)
    }
  }

  // Fetcing Data
  let limit=6
  const fetchAndUpdate = async (page) => {
    // console.log(orderBy)
    let apiUrl;
    if (orderBy && filterBy){
      apiUrl = `http://localhost:3000/products?_page=${page}&_limit=6&_sort=price&_order=${orderBy}&category=${filterBy}`;

    }
    else if (orderBy){
      apiUrl = `http://localhost:3000/products?_page=${page}&_limit=6&_sort=price&_order=${orderBy}`;
    }else if(filterBy){
      apiUrl = `http://localhost:3000/products?_page=${page}&_limit=6&category=${filterBy}`;
    }
    else{
      apiUrl = `http://localhost:3000/products?_page=${page}&_limit=6`
    }

    try {
      let finalData = await getData(apiUrl)
      
      const {data,totalCount} = finalData
      // console.log(data)
      setTotalCount(totalCount)
      // console.log(totalCount)
      setProducts(data)
    } catch (error) {
      console.log('Error is', error)
    }
  }

  const productList = products.map((card) => (<div key={card.id}>
    <h3>{card.id}{' . '}{card.category}</h3>
    <h1>{card.title}</h1>
    {/* <p>{card.description}</p> */}
    <img src={card.image} width='300px' alt={card.title} />
    <h3>Price : {card.price}</h3>
    <h4>Ratings :- {card.rating.rate} / {card.rating.count}</h4>
    <div>
    <Link to ={`/products/${card.id}`}>More Details</Link>
    </div>
    
  </div>))


// Pagination
  const handlePage = (val)=>{
  setPage(page+val)
  }


  return (
    <div>
      <h1>Products</h1>
      <button style={{margin:'15px'}} onClick={()=>setOrderBy('asc')}>Order By Ascending</button>
      <button onClick={()=>setOrderBy('desc')}>Order By Descending</button>
      <br />
      <br />
      <button onClick={()=>setFilterBy('jewelery')}>Filter By Jewellry</button>
      <br />
      <br />
      <button onClick={()=>setFilterBy('clothings')}>Filter By Clothings</button>
      <br />
      <br />
      <button onClick={()=>setFilterBy('electronics')}>Filter By Electronics</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>

        {productList}
      </div>
      <Pagination page={page} handlePage={handlePage} totalCount={totalCount}/>
    </div>
  )
}

export default Products