import React from 'react';
import InputText from './DumbComponents/InputText';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption?: number;
}

//this will take a boolean value and return the inputs with the data

//TODO: This components needs a form control

//TODO UseEffect to  set the atom, check if there is any data in the inputfields, if there is, enable the generate button
function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const arrayOfBoxes = Array(numberOfBoxesToCaption)
    .fill(0)
    .map((_, i) => i * i);

  //logic to display the inputs

  return (
    <>
      <form className='flex flex-col'>
        {arrayOfBoxes.map((_, i) => (
          <InputText key={i} />
        ))}
      </form>
    </>
  );
}

export default DisplayMemeInputs;
