import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
    const ingridientSummary = Object.keys(props.ingridients)
                              .map(igkey => {
                                  return (
                                      <li key = {igkey}>{igkey} : {props.ingridients[igkey]}</li>
                                  )
                              })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>You selected the following ingridients</p>
            <ul>
                {ingridientSummary}
            </ul>
            <p><storng>Total price = {props.price.toFixed(2)}</storng></p>
            <p>Continue to Checkout?</p>
            <Button buttontype="Success" clicked = {props.purchasecontinued}>Continue</Button>
            <Button buttontype="Danger" clicked = {props.purchasecancel}>Cancel</Button>    
        </Aux>
    )
}

export default OrderSummary;