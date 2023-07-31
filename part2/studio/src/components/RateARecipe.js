import React from 'react';

const stars = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe() {
  const rating = 4; // Update the rating value to test different ratings (should be between 1 and 5)

  return (
    <div>
      {rating >= 1 && rating <= 5 ? <GiveRating rating={rating} /> : null}
    </div>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
