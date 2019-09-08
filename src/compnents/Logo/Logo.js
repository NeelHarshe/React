import React from 'react'
import burgerlogo from '../../Assets/Images/burger-logo.png'
import classes from './Logo.css'

const Logo = (props) => (
    <div className = {classes.Logo} style = {{height:props.height}}>
        <img src ={burgerlogo} alt="MyBurger"></img>
    </div>
)

export default Logo;