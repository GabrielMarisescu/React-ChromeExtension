import React from 'react';
import { ButtonProps } from '../ComponentTypes';

function Button({ title, disabled }: ButtonProps) {
  if (disabled) {
    return (
      <button
        disabled
        className='disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'
      >
        {title}
      </button>
    );
  } else {
    return (
      <button className='disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'>
        {title}
      </button>
    );
  }
}

export default Button;
