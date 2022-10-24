import React from "react";
import propTypes from "prop-types"

import './Button.css'


const Button = ({text, onClick}) => {
    return(
       <div> <button className="custom-button" onClick={onClick}> {text}  </button> </div>
    )
}


Button.propTypes={
    onClick: propTypes.func.isRequired,
    text: propTypes.string
}


Button.defaultProps = {
    text: "Tıkla"
}



export default Button