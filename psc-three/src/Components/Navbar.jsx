import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const links = [{ path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/contact', title: 'Contact' },
    { path: '/register', title: 'Register' },
    { path: '*', title: 'NotFound' },
    { path: '/products', title: 'Products' },
    { path: '/login', title: 'Login' },]
    // { path: '/products/:id', title: 'SinglePageProduct' }]


    const defaultState = {textDecoration:'none',color:'black'}
    const activeState = {textDecoration:'none',color:'blue'}

    const AllLinks = links.map((link)=>(<NavLink style={({isActive})=>{return isActive?activeState:defaultState}}
     to={link.path} key={link.path}>{link.title}</NavLink>))

    

    return (
        <div style={{display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',border:'2px solid red',
                    width:'100%'}}>
            {AllLinks}
        </div>
    )
}

export default Navbar