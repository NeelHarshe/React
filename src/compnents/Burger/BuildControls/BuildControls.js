import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Cheese', type:'cheese'},
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacan'},
    {label: 'Meat', type:'meat'}
]


const BuildControls = (props) =>(

    <div className={classes.BuildControls}>
        <p>Your total price is <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label} 
                label = {ctrl.label}
                added = {() => props.ingridentAdded(ctrl.type)}
                removed = {()=>props.ingridentRemoved(ctrl.type)}
                disabled ={props.disabled[ctrl.type]}/>
               ))}
        <button className={classes.OrderButton}
                disabled = {!props.purchasable}
                onClick = {props.ordered}>CheckOut</button>        
    </div>

)

export default BuildControls;