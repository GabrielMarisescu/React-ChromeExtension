import React from 'react';
import { ButtonProps } from '../ComponentTypes';

function Button({
  title,
  disabled,
  onClick,
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  if (disabled) {
    return (
      <button
        onClick={onClick}
        disabled
        className='disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className='disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'
      >
        {title}
      </button>
    );
  }
}

export default Button;
