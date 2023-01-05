import React from 'react';
import { NEXT, PREVIOUS } from '../constants';
import Button from './DumbComponents/Button/Button';

interface ManageMemeButtonsProps {
  goToNextMeme: () => void;
  goToPreviousMeme: () => void;
}

function ManageMemeButtons({
  goToNextMeme,
  goToPreviousMeme,
}: ManageMemeButtonsProps) {
  return (
    <section className='flex-col justify-center items-center flex '>
      <section className=' w-4/5 flex'>
        <Button title={PREVIOUS} onClick={goToPreviousMeme} className='mx-1' />
        <Button title={NEXT} onClick={goToNextMeme} className='mx-1' />
      </section>
    </section>
  );
}

export default ManageMemeButtons;
