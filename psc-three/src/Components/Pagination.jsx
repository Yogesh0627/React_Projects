import React from 'react'
import {useState} from 'react'
const Pagination = (props) => {
    const {handlePage,page,totalCount} = props
    // console.log(totalCount)
    let lastPage = Math.ceil(totalCount/6)
    // console.log(lastPage)
  return (
    <div>
        <button disabled ={page === 1} onClick = {()=>{handlePage(-1)}}>Previous</button>
        <button>{page}</button>
        <button disabled ={page === lastPage}  onClick = {()=>{handlePage(1)}}>Next</button>

    </div>)
  
}

export default Pagination