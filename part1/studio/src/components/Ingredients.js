
import React from 'react';
import styles from './Ingredients.module.css';

export default function RecipeIngredients () {
    
        const ingredients= ["Chicken","Basmati Rice","Auromatic Masalas","Mint Leaves","Yogurt"];
      return (
        
<div>
<h3>Ingredients for Recipe ChickenBriyani</h3>
<ul className = {styles.ingredientList}>
   <li>{ingredients[0]}</li>
   <li>{ingredients[1]}</li>
   <li>{ingredients[2]}</li>
   <li>{ingredients[3]}</li>
   <li>{ingredients[4]}</li>
</ul>
</div>
      );
}
