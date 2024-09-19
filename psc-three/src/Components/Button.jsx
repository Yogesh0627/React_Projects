import React from 'react'

const Button = ({btnText,onClick}) => {
    // const {btnText,onClick} = 

    const buttonStyle ={
        margin:'20px',
        padding:'9px',
        backgroundColor:'crimson',
        fontSize:'15px',
        fontweight:'bold',
        letterSpacing:'0.5px',
        cursor:'pointer',
        border:'none',
        borderRadius:'5px'

    }
  return  <button style={buttonStyle} onClick={onClick}>{btnText}</button>
  
}

export default Button