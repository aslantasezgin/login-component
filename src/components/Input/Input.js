import React from "react";
import propTypes from "prop-types"
import './Input.css'
const Input=({type,placeholder,value,onChange})=>{
    return(
        <input className="custom-input" type={type} placeholder={placeholder} value={value} onChange={onChange}></input> 
    )
    
}


Input.propTypes ={
    value: propTypes.string.isRequired,
    placeholder: propTypes.string,
    onChange: propTypes.func.isRequired,
    type:propTypes.string
}

Input.defaultProps={
    placeholder: 'Değer Giriniz',
    type: 'text'
}

export default Input