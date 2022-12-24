import React from 'react';

function InputText({}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <>
      <input
        className=' placeholder:text-white border-blue-500 self-center my-1 w-4/5 h-10 border-2 text-white bg-transparent px-5 pr-16 rounded-lg focus:outline-none'
        id='MemeInputBox'
        type='text'
        placeholder='Meme Caption'
      />
    </>
  );
}

export default InputText;
