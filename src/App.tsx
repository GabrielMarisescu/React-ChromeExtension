import { useEffect, useState } from 'react';
import './App.css';
import { useGetMemes } from './hooks/useGetMeme';

function App() {
  const { data, loading, error } = useGetMemes();

  console.log(data, loading, error);

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </>
  );
}

export default App;
