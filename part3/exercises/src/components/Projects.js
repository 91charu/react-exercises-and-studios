import data from './../data.json';
import { useState } from 'react';

const MyProjects = () => {
    const [index, setIndex] = useState(0);
    const plants = data[index];
  
    function handleClick() {
      if (index < data.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
    return (
        <div>
      <button onClick={handleClick}>Next</button>
      <div>
        <h2>{plants.plant}</h2>
        <p>Botanical Name: {plants.botanicalName}</p>
        <img src={plants.photoUrl} alt={plants.alt} height="300" weidth="300"/>
      </div>
    </div>
  );
};
     export default MyProjects;