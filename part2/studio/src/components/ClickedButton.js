import React from 'react';
import "./styling.css";

function ClickedButton() {
  function handleClicked() {
    alert("You are clicking this pin!");
  }
  return (
  <button id="saveButton" onClick={handleClicked}>
  Save
</button>
);
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
