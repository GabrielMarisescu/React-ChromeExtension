import React from 'react';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-6xl font-bold text-center text-gray-800'>Oops!</h1>
      <p className='text-xl text-center text-gray-600'>
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
}
