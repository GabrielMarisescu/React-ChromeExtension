import { useAtom } from 'jotai';
import React from 'react';
import { inputBoxesValues, isGenerateButtonDisaled } from '../MainStore';
import InputText from './DumbComponents/InputText';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption: number;
}

function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const [_, setIsButtonDisabled] = useAtom(isGenerateButtonDisaled);
  const [inputBoxes, setInputBoxes] = useAtom(inputBoxesValues);
  const arrayOfBoxes: string[] = Array(numberOfBoxesToCaption).fill('');

  const updateCaption = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setInputBoxes((prevInputBoxes) => {
      const newInputBoxes = [...prevInputBoxes];
      newInputBoxes[i] = e.target.value;
      return newInputBoxes;
    });
  };

  React.useEffect(() => {
    !inputBoxes.length ? setInputBoxes(arrayOfBoxes) : null;

    const isAnyInputFilled = inputBoxes.some((input) => input !== '');
    setIsButtonDisabled(!isAnyInputFilled);
  }, [inputBoxes]);

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
