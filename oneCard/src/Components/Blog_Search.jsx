import React from 'react'

const Blog_Search = () => {
  return (
    <div>
        <div className=' text-lg font-extrabold font-serif w-4/5 m-auto mb-6 px-4'>
            <h4>Search by Categories</h4>
        </div>
        <div className='w-4/5 m-auto mb-14'>
          <div className='flex p-1 gap-2 flex-wrap '>
              <div className='p-2 '>
                <div className='rounded-full m-auto shadow-2xl w-fit p-3 '>
                  <img className='w-14' src="https://www.getonecard.app/images/icons/credit_card_in_depth.png" alt="" />
                </div>
                {/* <br /> */}
                <div>
                <p className='text-center py-3 font-semibold text-base'>Credit Card In-depth</p>
                </div>
              </div>
              
              <div className='p-2'>
                <div className='rounded-full shadow-2xl m-auto w-fit p-3' >
                  <img className='w-14' src="https://www.getonecard.app/images/icons/culture___credit_card.png" alt="" />
                </div>
                {/* <br /> */}
                <p className='text-center py-3 font-semibold text-base'>Culture & Credit Card</p>
              </div>
              
              <div className='p-2'>
                <div className='rounded-full shadow-2xl w-fit m-auto p-3 '>
                  <img className='w-14' src="https://getonecard.app/images/icons/onecard_features.png" alt="" />
                </div>
                {/* <br /> */}
                <p className='text-center py-3 font-semibold text-base'>OneCard Features</p>
              </div>
              
              <div className='p-2'>
                <div className='rounded-full shadow-2xl w-fit p-3 m-auto '>
                  <img className='w-14' src="https://www.getonecard.app/images/icons/repayments___emi.png" alt="" />
                </div>
                {/* <br /> */}
                <p className='text-center py-3 font-semibold text-base'>Repayments & EMI</p>
              </div>
              
              <div className='p-2'>
                <div className='rounded-full shadow-2xl w-fit p-3 m-auto '>
                  <img className='w-14' src="https://www.getonecard.app/images/icons/security.png" alt="" />
                </div>
                {/* <br /> */}
                <p className='text-center py-3 font-semibold text-base'>Safety</p>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Blog_Search