import React from 'react';
import { Link } from 'react-router-dom';
import { GENERATE, NEXT, PREVIOUS } from '../constants';
import Button from './DumbComponents/Button';

interface ManageMemeButtonsProps {
  goToNextMeme: () => void;
  goToPreviousMeme: () => void;
  disableGenerateButton: boolean;
}

function ManageMemeButtons({
  goToNextMeme,
  goToPreviousMeme,
  disableGenerateButton,
}: ManageMemeButtonsProps) {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <Link to={'/generated'} className=' w-1/2 my-3 '>
        <Button title={GENERATE} disabled={disableGenerateButton} />
      </Link>

      <section className=' w-4/5 flex'>
        <Button title={PREVIOUS} onClick={goToPreviousMeme} className='mx-1' />
        <Button title={NEXT} onClick={goToNextMeme} className='mx-1' />
      </section>
    </section>
  );
}

export default ManageMemeButtons;
