import React from 'react';
import InputText from './DumbComponents/InputText';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption?: number;
}

//this will take a boolean value and return the inputs with the data

//TODO: This components needs a form control
function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const arrayOfBoxes = Array(numberOfBoxesToCaption)
    .fill(0)
    .map((_, i) => i * i);

  return (
    <>
      {arrayOfBoxes.map((_, i) => (
        <InputText key={i} />
      ))}
    </>
  );
}

export default DisplayMemeInputs;
