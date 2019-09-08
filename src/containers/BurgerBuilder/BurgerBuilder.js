import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../compnents/Burger/Burger'
import BuildControls from '../../compnents/Burger/BuildControls/BuildControls'
import OrderSummary from '../../compnents/Burger/OrderSummary/OrderSummary'
import Modal from '../../compnents/UI/Modal/Modal'
const INGRIDIENT_PRICES ={
    salad : 2,
    meat: 0.5,
    bacan: 1,
    cheese: 2
}

class BurgerBuilder extends Component {

    state={
       ingridients: {
            salad: 0,
            cheese: 0,
            bacan: 0,
            meat: 0
        },
       
       baseprice: 4,
       purchasable : false,
       purchasing: false
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridents = {...this.state.ingridients};
        updatedIngridents[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.baseprice;
        const updatedPrice = oldPrice +  priceAddition; 
        this.setState({baseprice : updatedPrice, ingridients : updatedIngridents});
        this.updatePurchaseState(updatedIngridents);
    }

    reomveIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngridents = {...this.state.ingridients};
        updatedIngridents[type] = updatedCount;
        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.baseprice;
        const updatedPrice = oldPrice - priceDeduction; 
        this.setState({baseprice : updatedPrice, ingridients : updatedIngridents});
        this.updatePurchaseState(updatedIngridents);
    }

    updatePurchaseState = (updatedingredients) => {
        
        const sum = Object.keys(updatedingredients)
                    .map(igkey => {
                        return updatedingredients[igkey]
                    })
                    .reduce((sum,elements)=>{
                        return sum + elements;
                    },0);
        this.setState({purchasable : sum > 0})
    }

    purchasingHandler = () => {
        this.setState({purchasing : true})
    }

    purchaseCancelHandler =() => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You Continued')
    }
    render(){

        const  disabledinfo  = {...this.state.ingridients};
        for(let key in disabledinfo){
        disabledinfo[key] = disabledinfo[key] <= 0;
        }
        return (
           

            <Aux>
              <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 <OrderSummary ingridients = {this.state.ingridients}
                 purchasecancel = {this.purchaseCancelHandler}
                 purchasecontinued = {this.purchaseContinueHandler}
                 price = {this.state.baseprice}></OrderSummary>
              </Modal>
            <Burger ingridients={this.state.ingridients}/>
                
            <BuildControls
                ingridentAdded = {this.addIngridientHandler}
                ingridentRemoved = {this.reomveIngridientHandler}
                disabled = {disabledinfo}
                price = {this.state.baseprice}
                purchasable = {this.state.purchasable}
                ordered = {this.purchasingHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;