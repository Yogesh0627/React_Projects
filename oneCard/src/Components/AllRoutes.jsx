import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Careers from '../Pages/Careers'
import Offers from '../Pages/Offers'
import Faq from '../Pages/Faq'
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog'
// import SingleBlogMenu from '../Pages/SingleBlogMenu'
import CreditCardInDepth from '../Pages/CreditCardInDepth'
import ExploreLatest from '../Pages/ExploreLatest'
import Safety from '../Pages/Safety'
import OneCardFeatures from '../Pages/OneCardFeatures'
import CultureAndCreditCard from '../Pages/CultureAndCreditCard'
import RepaymentAndEmi from '../Pages/Repayment'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/careers" element={<Careers/>}/>
        <Route path = "/offers" element={<Offers/>}/>
        <Route path = "/faq" element={<Faq/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/blog" element={<Blog/>}/>
        <Route path = "/category/explorelatest" element= {<ExploreLatest/>}/>
        <Route path = "/category/creditcardindepth" element= {<CreditCardInDepth/>}/>
        <Route path = "/category/cultureandcreditcard" element= {<CultureAndCreditCard/>}/>
        <Route path = "/category/repaymentandemi" element= {<RepaymentAndEmi/>}/>
        <Route path = "/category/onecardfeatures" element= {<OneCardFeatures/>}/>
        <Route path = "/category/safety" element= {<Safety/>}/>
    </Routes>
  )
}

export default AllRoutes