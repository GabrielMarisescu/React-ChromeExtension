import React from 'react';

function Button({
  title,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...props}
      className=' mx-2 disabled:text-gray-600 disabled:cursor-not-allowed w-full bg-transparent hover:bg-blue-500  font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50'
    >
      {title}
    </button>
  );
}

export default Button;
