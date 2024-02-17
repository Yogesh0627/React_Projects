import React from 'react'

import Blog_Component from './Blog_Component'
import { Link } from 'react-router-dom'
import CreditCardInDepth from '../Pages/CreditCardInDepth'
const Blog_Componentes_Two = ({title='',imagelink1,query1,imagelink2,imagelink3,query2,query3,Navi}) => {
    // console.log('sdfsda',imagelink1)
  return (
    <div>
        <div>
          <div className=' px-4 py-4  '>
            <div>
                <div className='m-auto   mb-2 flex justify-between w-4/5 items-center '>
                    <div className=' '>
                    <h4 className='text-xl font-serif font-extrabold '>{title}</h4>
                    </div>
                    <Link className='text-lg font-serif font-semibold text-[#0090fa]' to={Navi}>View All   <span>  </span></Link>
                </div>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4  w-4/5 m-auto mt-7 gap-7 '> 
                    <Blog_Component date='Dec 18, 2023' query={query1}
                    imgLink={imagelink1}/>
                    <Blog_Component date='Dec 18, 2023' query={query2}
                    imgLink={imagelink2}/>
                    <Blog_Component date='Dec 18, 2023' query={query3}
                    imgLink={imagelink3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog_Componentes_Two