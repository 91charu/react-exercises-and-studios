import logo from './logo.svg';
import './App.css';

import RecipeAuthor from './components/Description.js';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/Photos.js';

function App() {
  return (
    <div className="App">
      <div>
      <RecipeDescription />
      <RecipeIngredients />
      <div className="recipePhotoBlock">
      <RecipePhoto/>
      </div>
   </div>
    </div>
  );
}

export default App;

