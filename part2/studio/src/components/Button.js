import React from 'react';
import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';

const Button = ({ saveButton, onClick }) => {
  return saveButton ? <SaveButton onClick={() => alert('Saved!')} /> : <SaveButton onClick={() => alert('Save!')} />;
};

export default Button;
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 