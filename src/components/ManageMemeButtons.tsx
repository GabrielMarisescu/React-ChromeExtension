import React from 'react';

//refactor

interface ManageMemeButtonsProps {
  goToNextMeme: () => void;
  goToPreviousMeme: () => void;
  disabledGenerate: boolean;
}

//disabledGenerate is a boolean value that will be used to disable the generate button

//TODO make disabled work

function ManageMemeButtons({
  goToNextMeme,
  goToPreviousMeme,
}: ManageMemeButtonsProps) {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <button className=' w-1/2 mt-5 bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'>
        Generate
      </button>

      <section className=' w-4/5 flex justify-between'>
        <button
          onClick={goToPreviousMeme}
          className=' mr-2 w-52 mt-5 bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Previous
        </button>
        <button
          onClick={goToNextMeme}
          className='  ml-2 mt-5 w-52 bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Next
        </button>
      </section>
    </section>
  );
}

export default ManageMemeButtons;
