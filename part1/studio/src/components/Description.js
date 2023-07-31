
import React from 'react';
import styles from './Description.module.css';

export function RecipeAuthor() {
    let authorLink="https://www.happyscook.com/search/label/Chef%20Venkatesh%20Bhat%20Recipes";
    let authorPhoto="https://yt3.googleusercontent.com/4G1SgaqEl81izq095JJwYmOawkBLEnMVBUP81Pef8uGTq80zn25FI2fzz2uwLRm7E0wN2QKj=s900-c-k-c0x00ffffff-no-rj";
    let authorName="Chef Venkatesh Bhat";
    return(
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Pic. of Chef Venkatesh Bhat" className={styles.imageUpdates} height="300" width="300"/>
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Happy's Cook</a> 
      </div>
   </div>
);
    }

   
export class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
  <div>
     <h1>Chicken Briyani</h1>
     <p>Biryani is a mixed rice dish originating from South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes.</p>
  </div>
  <RecipeAuthor />
</div>
        );
    }
}


    
    export default RecipeDescription;


