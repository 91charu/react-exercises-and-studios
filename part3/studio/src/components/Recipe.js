const RecipeAuthor = () => {
   let authorLink = "https://www.instagram.com/chef_damu/?hl=en";
   let authorPhoto = "https://www.newsbugz.com/wp-content/uploads/2020/02/Chef-Damu-2.png";
   let authorName = "Chef Damu";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Chicken", "Masala Spices", "GingerGarlic paste", "Turmeric powder", "Chilly powder", "Oil"];
   return(
      <div>
         <h3>Chicken Gravy</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken Gravy</h1>
            <p>Chicken Gravy is a delicious gravy made by cooking chicken with onion & tomato cashew puree, tempered spices and masala powders. Chicken Gravy makes a perfect combo with rice, roti, chapati, etc.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Chicken-Curry-Thumbnail.jpg" alt="" className="imageUpdates" height="300" weidth="300"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}