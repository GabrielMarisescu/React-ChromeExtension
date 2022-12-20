import React from "react"
import { Link } from 'react-router-dom';

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

  const disabledGenerateButton = () => {
    return  <button disabled className="disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50" >Generate</button>
  
  }
  const generateButton = () => {
    return   <button  className="disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50" >Generate</button>
  }






  return (
    <section className=' flex flex-col justify-center items-center'>
      <Link
        to={'/generated'}
       className=" w-1/2 mt-5 "
      >
        {disableGenerateButton ? disabledGenerateButton() : generateButton()}
      </Link>

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
