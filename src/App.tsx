import { useGetMemes } from './hooks/useGetMeme';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ShowcaseMemeImage from './components/ShowcaseMemeImage';
import MemeGeneratorHeader from './components/MemeGeneratorHeader';
import ManageMemesButtons from './components/ManageMemesButtons';

function App() {
  const { data, loading, error } = useGetMemes();

  console.log(data);
  return (
    <>
      <MemeGeneratorHeader />
      <ManageMemesButtons />
      <ShowcaseMemeImage
        imageLink={data?.data.memes[1].url}
        altValue={data?.data.memes[1].id}
      />
    </>
  );
}

export default App;
