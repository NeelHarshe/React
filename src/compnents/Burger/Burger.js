import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {

    let transformedingredients = Object.keys(props.ingridients)
                                   .map(igkey => {
                                       return [...Array(props.ingridients[igkey])].map((_,index) => {
                                          return <BurgerIngredient key={igkey + index} type = {igkey} />
                                       })
                                   })
                                   .reduce((array1,element)=> {
                                    return array1.concat(element)
                                })

    if (transformedingredients.length === 0){
        transformedingredients = <p>Please start adding Ingridients!</p>
    }                            

    const var1 = Object.keys(props.ingridients).map(igkey => { return [...Array(props.ingridients[igkey])] })

    console.log(transformedingredients);
    return(
        <div className={classes.Burger}> 
        <BurgerIngredient type="bread-top"/>
        {transformedingredients }
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger;