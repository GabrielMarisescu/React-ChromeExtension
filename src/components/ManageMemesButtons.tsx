import React from 'react';

//Generate will be disabled if there are no values in the text boxes

function ManageMemesButtons() {
  return (
    <section className=' flex flex-col justify-center items-center'>
      <button className=' w-1/2 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Generate
      </button>

      <button className=' mt-5 w-1/2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Skip
      </button>
    </section>
  );
}

export default ManageMemesButtons;
