import React from 'react';

//Generate will be disabled if there are no values in the text boxes

// function withManageLogic(Component: React.FC) {
//   return (props: any) => {
//     //logic here
//     return <Component {...props} />;
//   };
// }

interface ManageMemesButtonsProps {
  goToNextMeme: () => void;
  goToPreviousMeme: () => void;
}

function ManageMemesButtons({
  goToNextMeme,
  goToPreviousMeme,
}: ManageMemesButtonsProps) {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <button className=' w-1/2 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Generate
      </button>

      <section className=' w-4/5 flex justify-between'>
        <button
          onClick={goToPreviousMeme}
          className=' mr-2 w-52 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Previous
        </button>
        <button
          onClick={goToNextMeme}
          className='  ml-2 mt-5 w-52 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Next
        </button>
      </section>
    </section>
  );
}

// withManageLogic;

export default ManageMemesButtons;
