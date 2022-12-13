import { useGetMemes } from './hooks/useGetMeme';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ShowcaseMemeImage from './components/ShowcaseMemeImage';
import MemeGeneratorHeader from './components/MemeGeneratorHeader';

function App() {
  const { data, loading, error } = useGetMemes();

  return (
    <>
      <MemeGeneratorHeader />
      <ShowcaseMemeImage imageLink={data?.data.memes[0].url} />
    </>
  );
}

export default App;
