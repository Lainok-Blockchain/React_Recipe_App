import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe} >
            <h1> {title} </h1>
            <ol>
                <ul>
                <strong>Ingredients</strong>
                <div><strong>-----------------</strong> </div> 
                {ingredients.map(ingredient => (
                    <li>{ingredient.text} </li>
                ))}
                </ul>
            </ol>
            
            <img className={style.image} src={image} alt=""/>
            <p><strong>Calories:</strong>  {calories}</p>

        </div>
    );
};

export default Recipe;