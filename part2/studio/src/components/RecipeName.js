import React from 'react';
import recipedata from "./recipe.json";
import "./styling.css";

function RecipeName() {
  const recipeNames = recipedata.map((data) => (
    <h1 key={data.name}>{data.name}</h1>
  ));

  return <div>{recipeNames}</div>;
}
export default RecipeName;
//import return the name of the recipe as a level 1 header