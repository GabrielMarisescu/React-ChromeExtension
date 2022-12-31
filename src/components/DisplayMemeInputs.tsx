import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { inputBoxesValues, isGenerateButtonDisaled } from '../MainStore';
import InputText from './DumbComponents/InputText';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption: number;
}

function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const [_, setInputValue] = useState<string>('');
  const [__, setIsButtonDisabled] = useAtom(isGenerateButtonDisaled);
  const [inputBoxes, setInputBoxes] = useAtom(inputBoxesValues);
  const arrayOfBoxes: string[] = Array(numberOfBoxesToCaption).fill('');

  const updateCaption = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setInputBoxes((prevInputBoxes) => {
      setInputValue(e.target.value);
      const newInputBoxes = [...prevInputBoxes];
      newInputBoxes[i] = e.target.value;
      return newInputBoxes;
    });
  };

  React.useEffect(() => {
    arrayOfBoxes.length !== inputBoxes.length
      ? setInputBoxes(arrayOfBoxes)
      : null;
    console.log(inputBoxes, arrayOfBoxes);
    const isSomeInputFilled = inputBoxes.some((input) => input === '');
    setIsButtonDisabled(isSomeInputFilled);
  }, [inputBoxes, numberOfBoxesToCaption]);

  return (
    <>
      <form className='flex flex-col'>
        {arrayOfBoxes.map((_, i) => (
          <InputText onChange={(e) => updateCaption(e, i)} key={i} />
        ))}
      </form>
    </>
  );
}

export default DisplayMemeInputs;
