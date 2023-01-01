import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import InputText from './DumbComponents/InputText';
import { inputBoxesValues, isGenerateButtonDisaled } from '../MainStore';
import { useAtom } from 'jotai';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption: number;
}

function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [_, setIsButtonDisabled] = useAtom(isGenerateButtonDisaled);
  const [inputBoxes, setInputBoxes] = useAtom(inputBoxesValues);
  const arrayOfBoxes: string[] = Array(numberOfBoxesToCaption).fill('');

  const updateCaption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputBoxes((prevInputBoxes) => {
      const newInputBoxes = [...prevInputBoxes];
      const index = parseInt(e.target.name.split('-')[1], 10);
      newInputBoxes[index] = e.target.value;
      return newInputBoxes;
    });
  };

  useEffect(() => {
    arrayOfBoxes.length !== inputBoxes.length
      ? setInputBoxes(arrayOfBoxes)
      : null;

    const isSomeInputFilled = inputBoxes.every((input) => input === '');
    setIsButtonDisabled(isSomeInputFilled);
  }, [numberOfBoxesToCaption, inputBoxes]);

  const onSubmit = (data: unknown) => {
    console.log(data);
    //reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        {inputBoxes.map((_, i) => (
          <input
            {...register(`memeInput${i}`)}
            id='MemeInputBox'
            type='text'
            autoComplete='off'
            placeholder='Meme Caption'
            className=' placeholder:text-white border-blue-500 self-center my-1 w-4/5 h-10 border-2 text-white bg-transparent px-5 pr-16 rounded-lg focus:outline-none'
          />
        ))}
        <button type='submit'> Submit</button>
      </form>
    </>
  );
}

export default DisplayMemeInputs;
