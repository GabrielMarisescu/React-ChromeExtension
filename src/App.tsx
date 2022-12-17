// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ShowcaseMemeImage from './components/DumbComponents/ShowcaseMemeImage';
import MemeGeneratorHeader from './components/DumbComponents/MemeGeneratorHeader';
import ManageMemeButtons from './components/ManageMemeButtons';
import { AppProps, getMemesResponse } from './types/apiCallsTypes';
import withMemeData from './utils/HOCs/withMemeData';
import DisplayMemeInputs from './components/DisplayMemeInputs';

function AppWithData() {
  const Component = withMemeData(App);
  return <Component />;
}

function App({ data }: AppProps) {
  const [memeIndex, setMemeIndex] = React.useState<number>(0);
  const memeData = data.data;
  const memesLength = memeData.memes.length;

  //TODO Refactor this code to use a reducer
  const goToPreviousMeme = (): void => {
    setMemeIndex((prevData) =>
      prevData - 1 < 0 ? memesLength! - 1 : prevData - 1
    );
  };
  const goToNextMeme = (): void => {
    setMemeIndex((prevData) =>
      prevData + 1 > memesLength! - 1 ? 0 : prevData + 1
    );
  };

  return (
    <>
      <MemeGeneratorHeader />
      <ManageMemeButtons
        goToPreviousMeme={goToPreviousMeme}
        goToNextMeme={goToNextMeme}
        disabledGenerate={false}
      />
      <ShowcaseMemeImage
        imageLink={memeData.memes[memeIndex].url}
        altValue={memeData.memes[memeIndex].id}
      />
      <DisplayMemeInputs
        numberOfBoxesToCaption={memeData.memes[memeIndex].box_count}
      />
    </>
  );
}

export default AppWithData;
